const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    address: {
      geolocation: {
        lat: String,
        long: String,
      },
      city: String,
      street: String,
      number: Number,
      zipcode: String,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstname: String,
      lastname: String,
    },
    phone: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
