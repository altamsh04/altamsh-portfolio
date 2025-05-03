require("dotenv").config();
const mysql = require("mysql2/promise");
const dbConfig = require("../config/db.config");

let pool;

const connect = async () => {
  try {
    pool = mysql.createPool(dbConfig);

    const connection = await pool.getConnection();
    connection.release();

    return pool;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
};

const disconnect = async () => {
  try {
    if (pool) {
      await pool.end();
      console.log("MySQL connection pool closed");
    }
  } catch (error) {
    console.error("Error closing database connection:", error);
    throw error;
  }
};

const query = async (sql, params) => {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
};

module.exports = {
  connect,
  disconnect,
  query,
  getPool: () => pool,
};
