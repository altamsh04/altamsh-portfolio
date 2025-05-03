const express = require("express");
const quoteController = require("../controllers/quote.controller");

const router = express.Router();

// Get a random quote
router.get("/random", quoteController.getRandomQuote);

module.exports = router;
