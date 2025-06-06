// backend/src/services/controllers/createOrderController.js
const { createOrder } = require('../printful');

exports.createOrderHandler = async (req, res) => {
  try {
    const orderData = req.body;
    const created = await createOrder(orderData);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido', error: error.message });
  }
};
