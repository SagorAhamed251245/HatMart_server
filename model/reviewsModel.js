const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema(
  {
    productId: {
      required: true,
      type: String,
    },
    customer_name: {
      required: true,
      type: String,
    },
    customer_email: {
      required: true,
      type: String,
    },
    customer_image: {
      required: true,
      type: String,
    },
    rating: {
      required: true,
      type: Number,
    },
    feedback: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reviews", reviewsSchema);
