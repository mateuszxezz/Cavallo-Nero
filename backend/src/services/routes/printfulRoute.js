// src\services\routes\printfulRoute.js

const express = require('express');
const router = express.Router();
const {
  catalogController,
  syncedProductsController,
} = require('../controllers/printfulController');

router.get('/catalog', catalogController);
router.get('/synced', syncedProductsController);

module.exports = router;
