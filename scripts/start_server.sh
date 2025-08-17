#!/bin/bash

echo "Starting application services..."

cd /opt/gagga-front

if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found in /opt/gagga-front"
    exit 1
fi

if [ -f ".env" ]; then
    echo "✅ .env file found"
else
    echo "⚠️  Warning: .env file not found"
fi

echo "Installing dependencies..."
sudo npm ci

echo "Starting React server..."
sudo -u ec2-user nohup npm start > /var/log/react-ssr.log 2>&1 &

echo $! | sudo tee /var/run/react-app.pid

echo "Waiting for React SSR server to start..."
sleep 10

for i in {1..30}; do
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ React SSR server is responding on port 3000"
        break
    fi
    
    if [ $i -eq 30 ]; then
        echo "❌ React SSR server failed to start"
        echo "Checking logs:"
        tail -20 /var/log/react-ssr.log
        exit 1
    fi
    
    echo "Waiting for server... ($i/30)"
    sleep 2
done

echo "Starting nginx reverse proxy..."
sudo nginx -t

if [ $? -eq 0 ]; then
    sudo systemctl start nginx
    sudo systemctl enable nginx
    echo "✅ Nginx started successfully"
else
    echo "❌ Nginx configuration test failed"
    exit 1
fi

echo "✅ All services started successfully"