const express = require("express"); // Create Express server
const morgan = require("morgan"); // For automatically run server
const cookieParser = require("cookie-parser"); // For set Cookie
const createError = require("http-errors"); // For create HTTP Error
const xssClean = require("xss-clean"); // For  Secure api
const bodyParser = require("body-parser"); // For Get/ Set data into body
const cors = require("cors"); // To set access for client side URL

const { userRouter } = require("../../routes/userRoute");
const { seedRouter } = require("../../routes/web");
const serviceProvider = require("../../app/providers/responseServiceProvider");
const { authRouter } = require("../../routes/authRoute");
const { setRefreshToken } = require("../../app/helpers/cookiesHelper");
const { categoryRouter } = require("../../routes/categoryRoute");
const { productRouter } = require("../../routes/productRoute");
const { paymentRouter } = require("../../routes/paymentRoute");
const { brandRouter } = require("../../routes/brandRoute");
const { logoRouter } = require("../../routes/logoRoute");
const { reviewRouter } = require("../../routes/reviewRoute");
const { BASE_URL } = require("./secret/secret");

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
// To get access Client side url
app.use(cors(
  {
    origin: BASE_URL, // Frontend Base URL
    credentials: true
  }
));



app.use(express.static("public")); // To Display Server site image


/*
|--------------------------------------------------------------------------
|                           Socket IO
|--------------------------------------------------------------------------
 */
const io = require("socket.io")(8080, {
  cors: {
    origin: BASE_URL
  },
});
io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  setInterval(() => {
    io.emit("refresh", {});
  }, 500)

  // socket.on("disconnect", function () {
  //   console.log("Disconnect");

  // })

});

/*
|--------------------------------------------------------------------------
|                            Routes List (Backend)
|--------------------------------------------------------------------------
 */
app.use("/api", userRouter);
app.use("/", seedRouter);
app.use("/api/auth", authRouter);
app.use("/api", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api", logoRouter);
app.use("/api/review", reviewRouter);
app.use("/api", productRouter);
app.use("/payment", paymentRouter);


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
