const express = require('express');
const router = express.Router();

const UserService = require('../services/userService');

router.get('/users', UserService.list);

router.post('/users', UserService.create);

router.get('/users/:id', UserService.getById);

router.put('/users/:id', UserService.update);

router.delete('/users/:id', UserService.remove);

module.exports = router;