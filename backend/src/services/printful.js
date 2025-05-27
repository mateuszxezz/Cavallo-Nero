// backend\src\services\printful.js

const axios = require('axios');

const API_BASE_URL = process.env.PRINTFUL_API || 'https://api.printful.com';
const API_KEY = process.env.PRINTFUL_API_KEY;

const printfulApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

async function getCatalog() {
  const response = await printfulApi.get('/products');
  return response.data.result;
}

async function getProductDetails(productId) {
  const response = await printfulApi.get(`/products/${productId}`);
  return response.data.result;
}

async function getSyncedProducts() {
  const response = await printfulApi.get('/store/products');
  return response.data.result;
}

async function createOrder(orderData) {
  const response = await printfulApi.post('/orders', orderData);
  return response.data.result;
}

module.exports = {
  getCatalog,
  getProductDetails,
  getSyncedProducts,
  createOrder,
};
