const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: "String",
    },

    mobileNumber: {
      type: "String",
    },

    address: {
      type: String,
    },

    gender: {
      type: "String",
    },
    dateOfBirth: {
      type: Date,
    },
    status: {
      type: "String",
      default: "active",
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
