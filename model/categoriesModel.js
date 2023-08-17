const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,k
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
    sub_category: {
      type: [String],
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Categories", categorySchema);
