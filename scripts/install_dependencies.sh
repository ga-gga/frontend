#!/bin/bash

echo "Setting up file permissions..."

sudo chown -R nginx:nginx /var/www/html
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;

if command -v getenforce &> /dev/null && [[ $(getenforce) != "Disabled" ]]; then
    sudo setsebool -P httpd_can_network_connect 1
    sudo restorecon -R /var/www/html
fi

echo "File permissions configured successfully"