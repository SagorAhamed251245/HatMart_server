const stripe = require("stripe")(
  "sk_test_51NFA04JHKCQ45FlfJrbaYK2PozN35ykehdtEM5ePxGC2bD3AnfJadd3l7NbBPJRhveEYpNPf1chx9aszKqpr806C00Va5xviIi"
);

const checkoutSession = async (req, res) => {
  console.log("clicked");
  const body = req.body;
  console.log(body);

  const line_items = body?.items?.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
          metadata: { productId: item._id },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  const shippingInfo = body?.shippingInfo;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `https://hat-mart-client.vercel.app/?order_success=true`,
    cancel_url: `https://hat-mart-client.vercel.app/`,
    customer_email: "sagorahamed@gamil.com",
    client_reference_id: "112ge3",
    mode: "payment",
    metadata: { shippingInfo },
    shipping_options: [
      {
        shipping_rate: "shr_1Np5IPJHKCQ45FlfmixhbkE4",
      },
    ],
    line_items,
  });

  res.status(200).json({
    url: session.url,
  });
};

module.exports = {
  checkoutSession,
};
