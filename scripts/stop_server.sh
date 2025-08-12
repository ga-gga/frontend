#!/bin/bash

echo "Stopping nginx server..."
sudo systemctl stop nginx || true
echo "Nginx stopped successfully"

# scripts/install_dependencies.sh  
#!/bin/bash
echo "Setting up file permissions..."

# 웹 루트 디렉토리 권한 설정
sudo chown -R nginx:nginx /var/www/html
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;

# SELinux가 활성화된 경우 컨텍스트 설정
if command -v getenforce &> /dev/null && [[ $(getenforce) != "Disabled" ]]; then
    sudo setsebool -P httpd_can_network_connect 1
    sudo restorecon -R /var/www/html
fi

echo "File permissions configured successfully"