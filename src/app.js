const express = require("express");
require("express-async-errors");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();

const limiter = rateLimit({
  windowMs: 1000, // 1 seconds
  max: 2, // Limit each IP to 2 requests per `window` (here, per 15 seconds)
  headers: true, // Return rate limit info in the `RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (request, response) => {
  return response.json({
    status: true,
    message: "This is invest application entry point",
  });
});

// API routes
// app.use("/api/v1", require("./src/shared/routes"));

module.exports = async () => app;
