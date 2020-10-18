const express = require('express');
const router = express.Router();

const CustomerService = require('../services/customer.service');

router.get('/customers', CustomerService.list);

router.post('/customers', CustomerService.create);

router.get('/customers/:id', CustomerService.getById);

router.get('/customers/:name', CustomerService.getByName);

router.put('/customers/:id', CustomerService.update);

router.delete('/customers/:id', CustomerService.remove);

module.exports = router;