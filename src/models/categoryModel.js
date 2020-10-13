const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const CategorytModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  description: String,
});

CategorytModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Category = mongoose.model('Category', CategorytModel);

module.exports = Category;
