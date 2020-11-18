const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const PurchaseModel = new mongoose.Schema({
  provider: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Provider",
    required: true 
  },
  date: {
    type: Date, 
    default: Date.now
  },
  items: [{
    product: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product",
      required: true 
    },
    quantity: {
      type: Number, 
      required: true 
    },
    price: Number,
  }],
});

PurchaseModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Purchase = mongoose.model('Purchase', PurchaseModel);

module.exports = Purchase;
