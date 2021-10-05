const { Client } = require("pg");
const { DB_PASSWORD, DB_USERNAME, DB_HOST } = require("../helpers/env");

const connection = new Client({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: "db_latihan",
  port: 5432,
});
connection.connect();

module.exports = connection;
