const mongoose = require("mongoose");
const wishListSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    productId: { type: String, require: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("WishList", wishListSchema);
