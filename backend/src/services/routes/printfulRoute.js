// src\services\routes\printfulRoute.js

const express = require('express');
const router = express.Router();
const { createOrder } = require('../services/printful');
const {
  catalogController,
  syncedProductsController,
  createOrderController,
} = require('../controllers/printfulController');

router.get('/catalog', catalogController);
router.get('/synced', syncedProductsController);

router.post('/order', async (req, res) => {
  try {
    const result = await createOrder(req.body);
    res.json(result);
  } catch (err) {
    console.error('Error ao criar pedido: ', err.response?.data || err.message);
    res.status(500).json({ error: 'Erorr ao criar pedido!' });
  }
});

module.exports = router;
