const express = require('express');
const router = express.Router();

const ByProductService = require('../services/byproduct.service');

router.get('/byproducts', ByProductService.list);

router.post('/byproduct', ByProductService.create);

router.get('/byproduct/:id', ByProductService.getById);

router.put('/byproduct/:id', ByProductService.update);

router.delete('/byproduct/:id', ByProductService.remove);

module.exports = router;