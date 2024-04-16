require("dotenv").config(); // For access .env File data
const port = process.env.PORT_NUMBER; // 3000
// const mongodbURL =  process.env.MOGODB_ATLAS_URL;  // MONGODB Atlas Database
const mongodbURL = "mongodb://localhost:27017/ecommerceMernDB"; // Local Database
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY; // User Activation Key
const jwtResetPasswordKey = process.env.JWT_RESET_PASSWORD_KEY; //  Reset Password Key
const jwtLoginKey = process.env.JWT_LOGIN_KEY; //  Login Key For set Cookie
const smtpUsername = process.env.SMTP_USERNAME; //  For Email Send
const smtpPassword = process.env.SMTP_PASSWORD; //  For Email Send
const clientURL = process.env.CLIENT_URL; //  http://localhost:3000
const BASE_URL = process.env.BASE_URL; //  http://localhost:5173

const storeId = process.env.STORE_ID; // Payment
const storePassword = process.env.STORE_PASSWORD; 

module.exports = {
  port,
  mongodbURL,
  jwtActivationKey,
  jwtResetPasswordKey,
  jwtLoginKey,
  smtpUsername,
  smtpPassword,
  clientURL,
  BASE_URL,
  storeId,
  storePassword,
};
