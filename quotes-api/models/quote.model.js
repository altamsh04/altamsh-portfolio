const mysqlService = require("../services/mysql.service");

const getAllQuotes = async () => {
  try {
    const query = "SELECT id, text FROM quotes";
    const result = await mysqlService.query(query);
    return result;
  } catch (error) {
    console.error("Error getting all quotes:", error);
    throw error;
  }
};

module.exports = {
  getAllQuotes,
};
