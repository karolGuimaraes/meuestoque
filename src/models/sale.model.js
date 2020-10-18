const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const SaleModel = new mongoose.Schema({
  date: {
    type: Date, 
    default: Date.now
  },
  customer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Customer", 
  },
  items: [{
    product: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product", 
    },
    quantity: Number,
    saleprice: Number,
  }],
  description: String,
});

SaleModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Sale = mongoose.model('Sale', SaleModel);

module.exports = Sale;
