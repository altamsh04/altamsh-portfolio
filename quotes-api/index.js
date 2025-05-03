require("dotenv").config();
const express = require("express");
const cors = require("cors");
const quoteRoutes = require("./routes/quote.routes");
const mysqlService = require("./services/mysql.service");
const redisService = require("./services/redis.service");
const rateLimit = require("express-rate-limit");

const app = express();

const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 15,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Too many requests, please try again later.",
    });
  },
});

app.use("/api", limiter);

app.use(
  cors({
    origin: process.env.FRONTEND,
    methods: ["GET"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", (req, res, next) => {
  const origin = req.get("Origin");

  if (!origin || origin !== process.env.FRONTEND) {
    return res
      .status(403)
      .json({ message: "Forbidden: Invalid or missing Origin" });
  }

  next();
});

app.use(
  "/api/v1",
  (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ message: "Forbidden: Invalid API Key" });
    }
    next();
  },
  quoteRoutes
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Funny Developers Quotes API" });
});

const startServer = async () => {
  try {
    await mysqlService.connect();
    console.log("Connected to MySQL database");

    await redisService.connect();
    console.log("Connected to Redis server");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

process.on("SIGINT", async () => {
  try {
    await mysqlService.disconnect();
    await redisService.disconnect();
    console.log("Server gracefully shut down");
    process.exit(0);
  } catch (error) {
    console.error("Error during shutdown:", error);
    process.exit(1);
  }
});

startServer();
