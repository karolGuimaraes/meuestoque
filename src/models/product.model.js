const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const ProductModel = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  image: { 
    data: Buffer, 
    contentType: String 
  },
  description: String,
  link: String,
  wholesalequantity: {
    type: Number,
    default: 0,
    require: true
  },
  wholesaleprice: {
    type: Number,
    default: 0,
    require: true
  },
  retailprice: {
    type: Number,
    default: 0,
    require: true
  },
  color: String,
  material: String,
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Category", 
  },
  byproducts: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "ByProduct"
  }],
});

ProductModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Product = mongoose.model('Product', ProductModel);

module.exports = Product;
