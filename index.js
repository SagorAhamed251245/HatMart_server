const productRoutes = require("./routes/productRoutes");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.URL)
  .then(() => console.log("database connected.."))
  .catch((err) => console.log(err));

// middleware
app.use(cors());
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("hatmart project");
});

app.use("/api/v1/auth", productRoutes);

// server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening...  ${PORT}`);
});
