const express = require('express');
const router = express.Router();

const SaleService = require('../services/sale.service');

router.get('/sales', SaleService.list);

router.post('/sales', SaleService.create);

router.get('/sales/:id', SaleService.getById);

router.get('/sales/:name', SaleService.getByName);

router.put('/sales/:id', SaleService.update);

router.delete('/sales/:id', SaleService.remove);

module.exports = router;