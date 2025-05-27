// backend\src\services\controllers\createOrderController.js
const { createOrder } = require('../printful');

exports.createOrderController = async (req, res) => {
  try {
    const result = await createOrder(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.error('Erro ao criar pedido:', err.response?.data || err.message);
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};
