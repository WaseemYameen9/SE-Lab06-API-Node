const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');


router.post('/products',ProductController.createProduct);
router.get('/products',ProductController.getAllProducts);
router.put('/products/:id',ProductController.updateProduct);
router.delete('/products/:id',ProductController.deleteProduct);

module.exports = router;