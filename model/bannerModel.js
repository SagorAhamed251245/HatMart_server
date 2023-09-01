const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
      index: true,
    },
    sub_title: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
bannerSchema.index({ type: "type" });
module.exports = mongoose.model("Banner", bannerSchema);
