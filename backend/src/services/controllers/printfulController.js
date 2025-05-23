// src\services\controllers\printfulController.js

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

module.exports = {
  catalogController,
  syncedProductsController,
};
