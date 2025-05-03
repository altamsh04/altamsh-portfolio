require("dotenv").config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: 27256,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  connectTimeout: 30000,

  ssl: {
    rejectUnauthorized: false,
  },

  debug: false,
};

module.exports = dbConfig;
