// backend\src\services\routes\printfulRoute.js

const express = require('express');
const router = express.Router();
const { createOrder } = require('../printful');
const {
  catalogController,
  syncedProductsController,
  createOrderController,
} = require('../controllers/printfulController');

router.get('/catalog', catalogController);
router.get('/synced', syncedProductsController);

router.post('/order', createOrderController);

module.exports = router;