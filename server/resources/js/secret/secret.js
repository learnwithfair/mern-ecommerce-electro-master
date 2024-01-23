require("dotenv").config(); // For access .env File data
const port = process.env.PORT_NUMBER; // 3000
// const mongodbURL =  process.env.MOGODB_ATLAS_URL;  // MONGODB Atlas Database
const mongodbURL = "mongodb://localhost:27017/mernDB"; // Local Database
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY; // User Activation Key
const jwtResetPasswordKey = process.env.JWT_RESET_PASSWORD_KEY; //  Reset Password Key
const jwtLoginKey = process.env.JWT_LOGIN_KEY; //  Login Key For set Cookie
const smtpUsername = process.env.SMTP_USERNAME; //  For Email Send
const smtpPassword = process.env.SMTP_PASSWORD; //  For Email Send
const clientURL = process.env.CLIENT_URL; //  http://localhost:3000

module.exports = {
  port,
  mongodbURL,
  jwtActivationKey,
  jwtResetPasswordKey,
  jwtLoginKey,
  smtpUsername,
  smtpPassword,
  clientURL,
};
