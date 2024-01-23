// const creatError = require("http-errors");
const User = require("../../../models/userModel");
const data = require("../../../../database/seeders/data");

const seedUser = async (req, res, next) => {
  try {
    // Delete all existing users
    await User.deleteMany({});

    // Inserting new users
    const users = await User.insertMany(data.users);

    //successful response
    return res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { seedUser };
