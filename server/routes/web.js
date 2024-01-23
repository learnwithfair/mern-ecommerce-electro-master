const express = require("express");
const seedController = require("../app/http/controllers/seed/seedController");
const seedRouter = express.Router();

seedRouter.get("/reset-users", seedController.seedUser); // Reset User

module.exports = { seedRouter };
