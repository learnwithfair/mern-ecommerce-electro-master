const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const { userRouter } = require("../../routes/userRoute");
const { seedRouter } = require("../../routes/web");
const serviceProvider = require("../../test/providers/responseServiceProvider");
const { authRouter } = require("../../routes/authRoute");
const { setRefreshToken } = require("../../test/helpers/cookiesHelper");

const test = express();

test.use(cookieParser());
// Try 5 times within 15 minites
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5, // Maximum 5 times
  messae: "Too many  request from this api. Please4 try after sometime",
});

// Application level middlewire
test.use(morgan("dev"));
test.use(xssClean()); // For  Secure api

//Built-in middleware
test.use(express.json());
test.use(express.urlencoded({ extended: true }));

// Third-party middleware
test.use(bodyParser.json());
test.use(bodyParser.urlencoded({ extended: true }));

//  Custom Middleware
test.use(setRefreshToken); // Refresh Token [Automatically call this middlewire for all route]
const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  } else {
    return res.status(401).json({ Message: "Please login first" });
  }
};

// Route List
test.get("/", isLoggedIn, function (req, res) {
  id = req.body.id;
  res.status(200).send({
    message: "Welcome ID: " + id + " Name: MD RAHATUL RABBI.",
  });
});
test.use("/", seedRouter); // Seed Route Inherite another File.

// Client error handling
test.use((req, res, next) => {
  //   res.status(404).json({ message: "Route not found" });
  next(createError(404, "Route not found"));
});

// server error handling
test.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   res.status(500).send("Something broke!");
  // return res.status(err.status || 500).json({
  //   success: false,
  //   message: err.message,
  // });
  return serviceProvider.errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = test;
