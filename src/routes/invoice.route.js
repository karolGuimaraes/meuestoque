const express = require('express');
const router = express.Router();

const InvoiceService = require('../services/invoice.service');

router.get('/invoices', InvoiceService.list);

router.post('/invoices', InvoiceService.create);

router.get('/invoices/:id', InvoiceService.getById);

router.put('/invoices/:id', InvoiceService.update);

router.delete('/invoices/:id', InvoiceService.remove);

module.exports = router;