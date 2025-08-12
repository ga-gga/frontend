#!/bin/bash

echo "Stopping nginx server..."

sudo systemctl stop nginx || true

echo "Nginx stopped successfully"