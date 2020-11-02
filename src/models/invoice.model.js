const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const ItemModel = new mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Product",
    required: true 
  },
  quantity:  {
    type: Number, 
    required: true 
  },
  price: Number,
});

const InvoiceModel = new mongoose.Schema({
  provider: String,
  date: {
    type: Date, 
    default: Date.now
  },
  items: [ItemModel],
});

InvoiceModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Invoice = mongoose.model('Invoice', InvoiceModel);

module.exports = Invoice;
