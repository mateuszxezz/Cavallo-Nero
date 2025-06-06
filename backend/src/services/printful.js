// backend/src/services/printful.js
const axios = require('axios');

const API_BASE_URL = 'https://api.printful.com';
const API_KEY = process.env.PRINTFUL_API_KEY;

const { syncedProductsController } = require('../controllers/printfulController');

router.get('/synced', syncedProductsController);


// Headers da nova API
const headers = {
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

// Criar pedido
async function createOrder(orderData) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/orders`,
      orderData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pedido na Printful:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = {
  createOrder,
};
