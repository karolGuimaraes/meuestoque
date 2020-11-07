const express = require('express');
const router = express.Router();

const SaleService = require('../services/sale.service');

router.get('/sales', SaleService.list);

router.post('/sale', SaleService.create);

router.get('/sale/:id', SaleService.getById);

router.put('/sale/:id', SaleService.update);

router.delete('/sale/:id', SaleService.remove);

module.exports = router;