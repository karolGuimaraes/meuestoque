const express = require('express');
const router = express.Router();

const ProviderService = require('../services/provider.service');

router.get('/providers', ProviderService.list);

router.post('/provider', ProviderService.create);

router.get('/provider/:id', ProviderService.getById);

router.put('/provider/:id', ProviderService.update);

router.delete('/provider/:id', ProviderService.remove);

module.exports = router;