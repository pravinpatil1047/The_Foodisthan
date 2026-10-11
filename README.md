# Brew & Bloom — responsive React website

A small, responsive coffee-shop landing page built with React, HTML, CSS, and JavaScript. Includes mobile navigation, menu category filters, interactive love button, responsive layouts, and smooth scrolling.

## Run locally

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Create production build

```bash
npm run build
```

The production website is generated in `dist/`.

## Host on an Ubuntu EC2 instance with Nginx

1. Launch an Ubuntu EC2 instance and allow inbound **SSH (22)** and **HTTP (80)** in its Security Group. Add HTTPS (443) if you configure TLS.
2. Connect to the instance using SSH.
3. Install Nginx and Node.js (Node.js is only needed on the instance if you plan to build there):

```bash
sudo apt update
sudo apt install -y nginx
```

4. Build the site on your own computer with `npm install` and `npm run build`.
5. Create a destination folder on EC2, then copy the built files from your computer (replace the placeholders):

```bash
ssh -i /path/to/key.pem ubuntu@YOUR_EC2_PUBLIC_IP 'mkdir -p /home/ubuntu/brew-bloom-site'
scp -i /path/to/key.pem -r dist/* ubuntu@YOUR_EC2_PUBLIC_IP:/home/ubuntu/brew-bloom-site/
```

6. Copy the files into the Nginx web root: 

```bash
sudo mkdir -p /var/www/brew-bloom
sudo cp -r /home/ubuntu/brew-bloom-site/* /var/www/brew-bloom/
sudo chown -R www-data:www-data /var/www/brew-bloom
```

7. Configure Nginx:

```bash
sudo tee /etc/nginx/sites-available/brew-bloom >/dev/null <<'NGINX'
server {
    listen 80;
    listen [::]:80;
    server_name _;
    root /var/www/brew-bloom;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINX
sudo ln -s /etc/nginx/sites-available/brew-bloom /etc/nginx/sites-enabled/brew-bloom
sudo nginx -t
sudo systemctl reload nginx
```

8. Open `http://YOUR_EC2_PUBLIC_IP` in your browser. Make sure the EC2 Security Group allows inbound HTTP on port 80.

## Notes

- The photos and Google Fonts are loaded from external services, so an internet connection is needed for those assets.
- The business name, Pune address, menu prices, hours, and social handle are demo content; update them for your own use.
- For a real public site, configure a domain and HTTPS.
