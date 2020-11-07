const express = require('express');
const router = express.Router();

const ProductService = require('../services/product.service');

router.get('/products', ProductService.list);

router.post('/product', ProductService.create);

router.get('/product/:id', ProductService.getById);

router.get('/product/search/:name', ProductService.getByName);

router.put('/product/:id', ProductService.update);

router.delete('/product/:id', ProductService.remove);

module.exports = router;