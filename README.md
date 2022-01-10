# learn-js-market
sudo apt install mysql

sudo mysql

CREATE USER 'market'@'localhost' IDENTIFIED BY 'market';
ALTER USER 'market'@'localhost' IDENTIFIED WITH mysql_native_password BY 'market';

CREATE DATABASE market;

GRANT ALL PRIVILEGES ON market . * TO 'market'@'localhost';

exit

sudo mysql -u root market < market.sql

npm install

nodemon app.js

go to localhost:3000/