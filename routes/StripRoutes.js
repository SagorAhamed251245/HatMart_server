const express = require("express");
const { checkoutSession } = require("../controller/stripPaymentControlar.js");

const router = express.Router();

router.post("/cartPayment", checkoutSession);

module.exports = router;
