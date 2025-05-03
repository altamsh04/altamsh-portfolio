const quoteModel = require("../models/quote.model");
const redisService = require("../services/redis.service");

const CACHE_KEY_ALL_QUOTES = "cache_quotes";

const getRandomQuote = async (req, res, next) => {
  const startTime = Date.now(); // Start time

  try {
    const cachedQuotes = await redisService.get(CACHE_KEY_ALL_QUOTES);
    let quotes;
    let source;

    if (cachedQuotes) {
      quotes = JSON.parse(cachedQuotes);
      source = "cache";
      console.log("Served from Redis cache");
    } else {
      quotes = await quoteModel.getAllQuotes();

      if (!quotes || quotes.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No quotes found in the database",
        });
      }

      await redisService.set(CACHE_KEY_ALL_QUOTES, JSON.stringify(quotes));
      source = "database";
      console.log("Quotes cached in Redis");
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const endTime = Date.now(); // End time
    const duration = endTime - startTime;

    return res.json({
      success: true,
      source,
      timeTakenMs: duration,
      data: randomQuote,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRandomQuote,
};
