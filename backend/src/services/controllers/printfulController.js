// backend\src\services\controllers\printfulController.js

const {
  getCatalog,
  getSyncedProducts,
} = require('../printful');

async function catalogController(req, res) {
  try {
    const catalog = await getCatalog();
    res.json(catalog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar catálogo' });
  }
}

async function syncedProductsController(req, res) {
  try {
    const products = await getSyncedProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar produtos sincronizados' });
  }
}

// dentro de printfulController.js
async function createOrderController(req, res) {
  try {
    const result = await createOrder(req.body);
    res.json(result);
  } catch (err) {
    console.error('Error ao criar pedido: ', err.response?.data || err.message);
    res.status(500).json({ error: 'Erro ao criar pedido!' });
  }
}

module.exports = {
  catalogController,
  syncedProductsController,
  createOrderController,
};


module.exports = {
  catalogController,
  syncedProductsController,
  createOrderController,
};
