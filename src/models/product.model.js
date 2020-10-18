const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

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
  size: String,
  material: String,
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Category", 
  },
})

ProductModel.methods.quantity = function(){
  return (Invoice.count({'items.Product': this}) - Sale.count({'items.Product': this}))
}

ProductModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Product = mongoose.model('Product', ProductModel);

module.exports = Product;
