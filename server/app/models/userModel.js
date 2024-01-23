const { model } = require("mongoose");
const userSchema = require("../../database/migrations/create_users_table");

const User = model("Users", userSchema);
module.exports = User;
