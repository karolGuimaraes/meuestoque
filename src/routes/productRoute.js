const express = require('express');
const router = express.Router();

const ProductService = require('../services/productService');

router.get('/products', ProductService.list);

router.post('/products', ProductService.create);

router.get('/products/:id', ProductService.getById);

router.get('/products/:name', ProductService.getByName);

router.put('/products/:id', ProductService.update);

router.delete('/products/:id', ProductService.remove);

module.exports = router;