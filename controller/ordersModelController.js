const ordersModel = require("../model/ordersModel");

// add an order
const addOrder = async (req, res) => {
  try {
    const order = await ordersModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new order added",
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding order.");
  }
};

// get all order
const getAllOrder = async (req, res) => {
  try {
    const orders = await ordersModel.find();
    res.status(201).send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get all order.");
  }
};

// get all orders placed by an customer... using id
const getOrderByCustomerId = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const orders = await ordersModel.find({ customerId: customerId });
    res.status(201).send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get all order.");
  }
};

module.exports = { addOrder, getAllOrder, getOrderByCustomerId };
