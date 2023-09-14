const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
    },
    perchantage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

couponSchema.index({ type: "type" });
module.exports = mongoose.model("Coupon", couponSchema);
