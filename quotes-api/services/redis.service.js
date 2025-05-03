require("dotenv").config();
const { createClient } = require("redis");
const redisConfig = require("../config/redis.config");

let redisClient;

exports.connect = async () => {
  redisClient = await createClient({
    url: redisConfig.url,
  })
    .on("error", (err) => console.log("Redis Client Error", err))
    .on("connect", () => console.log("Redis Client Connected"))
    .connect();

  return redisClient;
};

exports.disconnect = async () => {
  if (redisClient) {
    await redisClient.quit();
    console.log("Redis Client Disconnected");
  } else {
    console.log("Redis client was not connected.");
  }
};

exports.get = async (key) => {
  try {
    if (!redisClient) throw new Error("Redis client not initialized");
    return await redisClient.get(key);
  } catch (error) {
    console.error(`Redis GET error for key "${key}":`, error.message);
    return null;
  }
};

exports.set = async (key, value, ttl = redisConfig.ttl) => {
  try {
    if (!redisClient) throw new Error("Redis client not initialized");
    await redisClient.set(key, value, {
      EX: ttl,
    });
  } catch (error) {
    console.error(`Redis SET error for key "${key}":`, error.message);
  }
};
