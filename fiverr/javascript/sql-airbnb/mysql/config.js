const mysql = require('mysql');

module.exports = {
  getCon: () => mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpass",
    database: "comp206_airbnb"
  }),
  functions: mysql
};