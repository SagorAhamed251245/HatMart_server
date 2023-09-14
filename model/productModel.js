const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
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
      index: true,
      lowercase: true,
    },
    sub_category: {
      type: [String],
      default: [],
      required: true,
      index: true, // Changed 'multi' to 'name'
      lowercase: true,
    },

    brand: {
      type: String,
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
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      required: true,
    },
    stock_quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    isEocFriendly: {
      type: Boolean,
      default: false,
    },
    viewCount: {
      type: Number,
      default: 0,
    },

    estimateSells: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.index({
  title: "text",
  category: "text",
  sub_category: "text", // Changed 'multi' to 'name'
});

module.exports = mongoose.model("Product", productSchema);
