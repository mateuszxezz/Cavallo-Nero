// backend\src\services\printful.js

require('dotenv').config();
const axios = require('axios');

const PRINTFUL_API = process.env.PRINTFUL_API || 'https://api.printful.com';
const API_KEY = process.env.PRINTFUL_API_KEY;

const axiosInstance = axios.create({
  baseURL: PRINTFUL_API,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const printfulApi = axios.create({
  baseURL: PRINTFUL_API,
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
  const response = await axiosInstance.post('/orders', orderData);
  return response.data;
}

module.exports = {
  getCatalog,
  getProductDetails,
  getSyncedProducts,
  createOrder,
};

console.log(process.env.PRINTFUL_API_KEY);