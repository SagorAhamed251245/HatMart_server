const mongoose = require("mongoose");

const stripSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("StripPayment", stripSchema);
