const mongoose = require("mongoose");
const wishListSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    productId: { type: String, require: true },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    productName: {
      type: String,
      require: true,
    },
    productImage: {
      type: String,
      require: true,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("WishList", wishListSchema);
