const mongoose = require("mongoose");

const userTrafficModelSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UsersTraffic", userTrafficModelSchema);
