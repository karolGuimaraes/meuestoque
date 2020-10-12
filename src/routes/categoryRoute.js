const express = require('express');
const router = express.Router();

const CategoryService = require('../services/categoryService');

router.get('/categories', CategoryService.list);

router.post('/categories', CategoryService.create);

router.get('/categories/:id', CategoryService.getById);

router.get('/categories/:name', CategoryService.getByName);

router.put('/categories/:id', CategoryService.update);

router.delete('/categories/:id', CategoryService.delete);

module.exports = router;