const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    customerId: {
      type: Number,
      required: true,
    },
    customerInfo: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      number: {
        type: String,
      },
      address: {
        type: String,
      },
    },
    BDT: {
      type: Number,
      default: 0,
    },
    transactionId: {
      type: String,
      required: true,
    },
    paymentMethod: {
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
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", ordersSchema);
