#!/usr/bin/env bash
set -euo pipefail

SITE_DIR="/home/premix-site"
CRM_DIR="/home/premix-crm"
REPO="https://github.com/MagomedovG/premix-front.git"

echo "==> Clone or update site"
if [ -d "$SITE_DIR/.git" ]; then
  cd "$SITE_DIR"
  git pull --ff-only origin main
else
  git clone "$REPO" "$SITE_DIR"
  cd "$SITE_DIR"
fi

echo "==> Ensure .env"
if [ ! -f .env ]; then
  cat > .env <<'EOF'
NODE_ENV=production
NEXT_PUBLIC_YANDEX_METRICA_ID=109713872
NEXT_PUBLIC_YANDEX_VERIFICATION=9d2ce96055e676cc
EOF
fi

echo "==> Build and start premix-site (does not touch CRM stack)"
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up -d

NGINX_DIR="/home/nginx-shared"

echo "==> Install nginx vhost for premixlab.ru into shared-nginx"
mkdir -p "$NGINX_DIR/conf.d"
cp "$SITE_DIR/nginx/conf.d/premixlab.ru.conf" "$NGINX_DIR/conf.d/premixlab.ru.conf"

if ! docker exec shared-nginx test -f /etc/letsencrypt/live/premixlab.ru/fullchain.pem 2>/dev/null; then
  echo "==> Request SSL certificate for premixlab.ru"
  docker compose -f "$NGINX_DIR/docker-compose.yml" run --rm certbot certonly \
    --webroot -w /var/www/certbot \
    -d premixlab.ru -d www.premixlab.ru \
    --email admin@premixlab.ru --agree-tos --no-eff-email || true
fi

echo "==> Reload shared-nginx"
docker exec shared-nginx nginx -t
docker exec shared-nginx nginx -s reload

echo "==> Status"
docker ps --filter name=premix-site --filter name=shared-nginx --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
echo "Done. Check https://premixlab.ru"
