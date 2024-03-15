const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost", 
  user: "user",
  port: "5432",
  password: "example",
  database: "app",
});
module.exports = pool;

