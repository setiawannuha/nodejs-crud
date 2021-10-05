const { Client } = require("pg");
const { DB_PASSWORD, DB_USERNAME } = require("../helpers/env");

const connection = new Client({
  host: "127.0.0.1",
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: "db_latihan",
  port: 5432,
});
connection.connect();

module.exports = connection;
