const express = require('express');
const router = express.Router();

const CustomerService = require('../services/customer.service');

router.get('/customers', CustomerService.list);

router.post('/customer', CustomerService.create);

router.get('/customer/:id', CustomerService.getById);

router.get('/customer/search/:name', CustomerService.getByName);

router.put('/customer/:id', CustomerService.update);

router.delete('/customer/:id', CustomerService.remove);

module.exports = router;