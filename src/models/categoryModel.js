const mongoose = require('../database');

const CategorytModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  description: String,
});

const Category = mongoose.model('Category', CategorytModel);

module.exports = Category;
