const mongoose = require("mongoose"); //  import  the mongoose module
const userschema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    country: String,
    State: String,
    Address: String,
    zip_code: Number,
    phone: Number,
    Date_of_birthday: Date,
    gender: String,
    photo: String,
  },
  { timestamps: true }
); // add createdAt and updatedAt fields with a timestamp to each document
module.exports = mongoose.model("Users", userschema); // export the model
