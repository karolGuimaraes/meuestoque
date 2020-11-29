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
    byproducts: [{
      byproduct: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "ByProduct",
        required: true 
      },
      quantity: {
        type: Number, 
        required: true 
      },
    }],
    purchaseprice: {
      type: Number, 
      required: true 
    },
    saleprice: {
      type: Number, 
      required: true 
    }
  }],
});

PurchaseModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Purchase = mongoose.model('Purchase', PurchaseModel);

module.exports = Purchase;
