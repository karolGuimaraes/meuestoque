const express = require('express');
const router = express.Router();

const InvoiceService = require('../services/invoice.service');

router.get('/invoices', InvoiceService.list);

router.post('/invoice', InvoiceService.create);

router.get('/invoice/:id', InvoiceService.getById);

router.put('/invoice/:id', InvoiceService.update);

router.delete('/invoice/:id', InvoiceService.remove);

module.exports = router;