// config.js
require("dotenv").config();
const mongoose = require("mongoose");

const configuration = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = configuration;
