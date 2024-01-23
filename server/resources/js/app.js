const express = require("express"); // Create Express server
const morgan = require("morgan"); // For automatically run server
const cookieParser = require("cookie-parser"); // For set Cookie
const createError = require("http-errors"); // For create HTTP Error
const xssClean = require("xss-clean"); // For  Secure api
const bodyParser = require("body-parser"); // For Get/ Set data into body

const { userRouter } = require("../../routes/userRoute");
const { seedRouter } = require("../../routes/web");
const serviceProvider = require("../../app/providers/responseServiceProvider");
const { authRouter } = require("../../routes/authRoute");
const { setRefreshToken } = require("../../app/helpers/cookiesHelper");
const { categoryRouter } = require("../../routes/categoryRoute");
const { productRouter } = require("../../routes/productRoute");

const app = express();
/*
|--------------------------------------------------------------------------
|                            Initialize Middleware
|--------------------------------------------------------------------------
 */
app.use(cookieParser()); // For set Cookie
app.use(morgan("dev")); // For automatically run server
app.use(xssClean()); // For  Secure api
app.use(bodyParser.json()); // For Set, Read data into body and display JSON Format Text
app.use(bodyParser.urlencoded({ extended: true })); // Get HTML Form Data
app.use(setRefreshToken); // For set Refresh Token [Automatically call this middlewire for all route]

/*
|--------------------------------------------------------------------------
|                            Routes List (Backend)
|--------------------------------------------------------------------------
 */
app.use("/api", userRouter);
app.use("/", seedRouter);
app.use("/api/auth", authRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);

/*
|--------------------------------------------------------------------------
|                           Error Handling
|--------------------------------------------------------------------------
 */
// Client error handling
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

// server error handling
app.use((err, req, res, next) => {
  return serviceProvider.errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
