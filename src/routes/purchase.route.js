const express = require('express');
const router = express.Router();

const PurchaseService = require('../services/purchase.service');

router.get('/purchases', PurchaseService.list);

router.post('/purchase', PurchaseService.create);

router.get('/purchase/:id', PurchaseService.getById);

router.put('/purchase/:id', PurchaseService.update);

router.delete('/purchase/:id', PurchaseService.remove);

module.exports = router;