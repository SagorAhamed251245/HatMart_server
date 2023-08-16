const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // It should be 'required', not 'require'
    },
    details: {
      description: {
        type: String,
        required: true,
      },
      packagingDelivery: {
        type: String,
        required: true,
      },
      warnings: {
        type: String,
        required: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sub_category: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    rating: {
      type: Number,
    },
    stock: {
      type: String,
      required: true,
    },
    discount_percent: {
      type: String,
    },
    unit: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // You missed the curly braces for timestamps

module.exports = mongoose.model("Product", productSchema); // Use singular "Product" for the collection name
