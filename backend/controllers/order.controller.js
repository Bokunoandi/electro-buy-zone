const Order = require('../models/order.model');

exports.create = async (req, res) => {
  const { items, total } = req.body;
  const order = new Order({ userId: req.user._id, items, total });
  await order.save();
  res.status(201).json(order);
};

exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).populate('items.productId');
  res.json(orders);
};