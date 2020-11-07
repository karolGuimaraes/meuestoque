const express = require('express');
const router = express.Router();

const CategoryService = require('../services/category.service');

router.get('/categories', CategoryService.list);

router.post('/category', CategoryService.create);

router.get('/category/:id', CategoryService.getById);

router.get('/category/search/:name', CategoryService.getByName);

router.put('/category/:id', CategoryService.update);

router.delete('/category/:id', CategoryService.remove);

module.exports = router;