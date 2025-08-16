#!/bin/bash

echo "Stopping React SSR server..."
sudo pkill -f "npm.*start" || true

echo "Stopping nginx server..."
sudo systemctl stop nginx || true

echo "✅ All services stopped successfully"