const mongoose = require("mongoose");

const userdetailsSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter firstName"],
    },
    lastName: {
      type: String,
      rrequired: [true, "Please enter lastName"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
  },
  {
    timestamps: true,
  }
);

const Userdetails = mongoose.model("userdetails", userdetailsSchema);

module.exports = Userdetails;
