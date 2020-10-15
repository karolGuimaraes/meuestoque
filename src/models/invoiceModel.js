const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const InvoiceModel = new mongoose.Schema({
  provider: String,
  date: {
    type: Date, 
    default: Date.now
  },
  items: [{
    product: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product", 
    },
    quantity: Number,
    purchaseprice: Number,
  }]
});

InvoiceModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Invoice = mongoose.model('Invoice', InvoiceModel);

module.exports = Invoice;
