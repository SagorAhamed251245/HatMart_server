const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", ordersSchema);
