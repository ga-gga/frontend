#!/bin/bash

echo "Checking React Application ..."
SSR_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null || echo "000")

if [ $SSR_STATUS -eq 200 ]; then
    echo "✅ React is responding (Status: $SSR_STATUS)"
else
    echo "❌ React not responding (Status: $SSR_STATUS)"
    
    echo "Checking process status:"
    ps aux | grep -E "(npm|node)" | grep -v grep
    
    echo "Checking logs:"
    tail -10 /var/log/react-ssr.log 2>/dev/null || echo "No log file found"
    
    echo "Checking port 3000:"
    sudo netstat -tlnp | grep :3000 || echo "Port 3000 not listening"
    
    exit 1
fi

echo "Checking nginx status..."
if sudo systemctl is-active --quiet nginx; then
    echo "✅ Nginx is running"
else
    echo "❌ Nginx is not running"
    sudo systemctl status nginx
    exit 1
fi

echo "Checking external access (nginx → react)..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost/ 2>/dev/null || echo "000")

if [ $HTTP_STATUS -eq 200 ]; then
    echo "✅ External HTTP access working (Status: $HTTP_STATUS)"
else
    echo "❌ External HTTP access failed (Status: $HTTP_STATUS)"
    
    echo "Checking nginx configuration:"
    sudo nginx -t
    
    echo "Checking nginx error logs:"
    sudo tail -10 /var/log/nginx/react-ssr.error.log 2>/dev/null || echo "No error log yet"
    
    exit 1
fi

echo "Final process check:"
REACT_PID=$(cat /var/run/react-app.pid 2>/dev/null || echo "")
if [ -n "$REACT_PID" ] && kill -0 $REACT_PID 2>/dev/null; then
    echo "✅ React server process (PID: $REACT_PID) is running"
else
    echo "⚠️  React server PID not found or process not running"
fi

echo "✅ All services validation completed successfully"