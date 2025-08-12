#!/bin/bash

echo "Validating service..."

# nginx 상태 확인
if sudo systemctl is-active --quiet nginx; then
    echo "Nginx is running"
else
    echo "Nginx is not running"
    exit 1
fi

# HTTP 응답 확인
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost/)
if [ $HTTP_STATUS -eq 200 ]; then
    echo "HTTP service is responding correctly (Status: $HTTP_STATUS)"
else
    echo "HTTP service is not responding correctly (Status: $HTTP_STATUS)"
    exit 1
fi

echo "Service validation completed successfully"