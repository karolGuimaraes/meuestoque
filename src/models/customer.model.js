const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const CustomerModel = new mongoose.Schema({
  name: String,
  reference: String,
  phone: String,
  instagram: String
});

CustomerModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Customer = mongoose.model('Customer', CustomerModel);

module.exports = Customer;
