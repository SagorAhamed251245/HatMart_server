const productRoutes = require("./routes/productRoutes.js");
const categoriesRoutes = require("./routes/categoriesRoutes.js");
const usersRoutes = require("./routes/usersRoutes.js");
const reviewsRoutes = require("./routes/reviewsRoutes.js");
const bannerRoutes = require("./routes/bannersRoutes.js");
const ordersRoutes = require("./routes/ordersRoutes.js");
const transactionRoutes = require("./routes/transactionRoutes.js");
const cartPaymentRoutes = require("./routes/StripRoutes.js");
const wishListRoutes = require("./routes/wishListRoutes.js");
const couponRoutes = require("./routes/couponRoutes.js");
const userIPRoutes = require("./routes/userTrafficRoutes.js");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

mongoose
  .connect(process.env.URL)
  .then(() => console.log("database connected.."))
  .catch((err) => console.log(err));

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
app.get("/", (req, res) => {
  res.send("hatmart project");
});

app.use("/api/v1/auth", productRoutes);
app.use("/api/v1/auth", categoriesRoutes);
app.use("/api/v1/auth", usersRoutes);
app.use("/api/v1/auth", reviewsRoutes);
app.use("/api/v1/auth", bannerRoutes);
app.use("/api/v1/auth", ordersRoutes);
app.use("/api/v1/auth", transactionRoutes);
app.use("/api/v1/auth", cartPaymentRoutes);
app.use("/api/v1/auth", wishListRoutes);
app.use("/api/v1/auth", couponRoutes);
app.use("/api/v1/auth", userIPRoutes );

// server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening...  ${PORT}`);
});
