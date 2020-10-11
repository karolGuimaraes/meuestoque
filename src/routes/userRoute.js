const express = require('express');
const router = express.Router();

const UserService = require('../services/userService');

router.get('/users', UserService.list);

router.post('/users/create', UserService.create);

module.exports = router;