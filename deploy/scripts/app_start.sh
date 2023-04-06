#!/bin/bash
cd /var/project
rm -rf /var/www/html/
mkdir /var/www/html/
cp -r out/. /var/www/html/

cd /var/project/docker
docker compose build
docker compose down
docker compose up -d

#npm start
#pm2 start npm --name "covidapp" -- start
#pm2 startup
#pm2 save
#pm2 restart all
