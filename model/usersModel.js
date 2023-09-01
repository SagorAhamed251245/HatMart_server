const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    image: {
      type: "String",
    },

    mobileNumber: {
      type: "Number",
    },
    gender: {
      type: "String",
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
