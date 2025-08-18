#!/bin/bash

echo "Setting up application permissions..."

sudo chown -R ec2-user:ec2-user /opt/gagga-front
sudo find /opt/gagga-front -type d -exec chmod 755 {} \;
sudo find /opt/gagga-front -type f -exec chmod 644 {} \;

if [ -f /opt/gagga-front/.env ]; then
    sudo chmod 600 /opt/gagga-front/.env
    echo "✅ .env file permissions set"
fi

sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
else
    echo "❌ Nginx configuration has errors"
    exit 1
fi

echo "✅ Dependencies and configuration setup completed"