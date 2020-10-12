const mongoose = require('../database');

const ProductModel = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    require: true
  },
  name: String,
  description: String,
  link: String,
  saleprice: Number,
  link: String,
  size: String,
  material: String,
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Category", 
  },
})

const Product = mongoose.model('Product', ProductModel);

module.exports = Product;
