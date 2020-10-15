const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const InvoiceModel = new mongoose.Schema({
  provider: String,
  date: Date,
});

InvoiceModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Invoice = mongoose.model('Invoice', InvoiceModel);

module.exports = Invoice;
