const { model } = require("mongoose");
const logoSchema = require("../../database/migrations/create_logo_table");

const Logo = model("Logos", logoSchema);
module.exports = Logo;
