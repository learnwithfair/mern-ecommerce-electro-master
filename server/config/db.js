const mongoose = require("mongoose");
const { mongodbURL } = require("../resources/js/secret/secret");

// For Check Database Connection
const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log("Database connection successfully");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection error");
    });
  } catch (error) {
    console.error("Could not connect to DB: ", error);
  }
};
module.exports = connectDB;
