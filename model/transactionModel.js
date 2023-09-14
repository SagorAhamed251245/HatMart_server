const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema(
  {
    transactionId: {
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

    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Transactions", transactionsSchema);
