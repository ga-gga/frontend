#!/bin/bash

echo "Starting nginx server..."

# nginx 설정 테스트
sudo nginx -t

if [ $? -eq 0 ]; then
    sudo systemctl start nginx
    sudo systemctl enable nginx
    echo "Nginx started successfully"
else
    echo "Nginx configuration test failed"
    exit 1
fi