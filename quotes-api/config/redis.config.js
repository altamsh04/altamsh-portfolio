require("dotenv").config();

const redisConfig = {
  url: process.env.REDIS_URL,
  ttl: parseInt(process.env.REDIS_TTL) || 3600,
};

module.exports = redisConfig;
