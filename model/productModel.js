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
      require: true,
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
      type: String,
    },
    unit: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.index({ title: "text", category: "text" });

module.exports = mongoose.model("Product", productSchema);
