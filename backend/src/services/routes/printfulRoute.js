// backend/src/services/routes/printfulRoute.js
const express = require('express');
const router = express.Router();
const { createOrderHandler } = require('../controllers/createOrderController');

router.post('/order', createOrderHandler);

module.exports = router;
