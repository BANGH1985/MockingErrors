const express = require('express');
const { getMockProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/mockingproducts', getMockProducts);
router.post('/', createProduct);

module.exports = router;
