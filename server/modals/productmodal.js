  const mongoose = require("mongoose"); //  import  the mongoose module
  const productschema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      photos: { type: [String], required: true },
      feedback: { type: Array, default: [] },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
      },
      availability: {
        situation: { type: String, default: "Not rented" },
        rentedto: { type: String, default: "" },
        dateofrent: { type: Date, default: "" },
        duration: { type: Number, default: 0 }, // Use Number type for duration
      },
    },
    { timestamps: true }
  ); // add createdAt and updatedAt fields with a timestamp to each document
  module.exports = mongoose.model("Products", productschema); // export the model
