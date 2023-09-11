const express = require("express");

const { checkoutSession } = require("../controller/stripPaymentControler");

const router = express.Router();

router.post("/cartPayment", checkoutSession);

module.exports = router;
