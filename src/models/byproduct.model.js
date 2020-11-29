const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const ByProductModel = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    require: true
  },
  size: {
    type: String,
    enum: ['U', 'P', 'M', 'G', 'GG'],
    default: 'U',
    require: true
  },
  quantity: {
    type: Number, 
    required: true 
  },
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Product",
    required: true
  },
});

ByProductModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const ByProduct = mongoose.model('ByProduct', ByProductModel);

module.exports = ByProduct;