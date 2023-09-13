const stripe = require("stripe")(
  "sk_test_51NFA04JHKCQ45FlfJrbaYK2PozN35ykehdtEM5ePxGC2bD3AnfJadd3l7NbBPJRhveEYpNPf1chx9aszKqpr806C00Va5xviIi"
);

const stripeModel = require("../model/stripModel.js");

const checkoutSession = async (req, res) => {
  const { price } = req.body;
  try {
    if (price) {
      const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      return "no price found";
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  checkoutSession,
};
