const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');

router.get('/users', UserService.list);

router.post('/user', UserService.create);

router.get('/user/:id', UserService.getById);

router.put('/user/:id', UserService.update);

router.delete('/user/:id', UserService.remove);

module.exports = router;