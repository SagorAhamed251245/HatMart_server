const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "approved",
    },
    deliveryCharge: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Transactions", transactionsSchema);
