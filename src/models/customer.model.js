const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const CustomerModel = new mongoose.Schema({
  firstname: String,
  lastname: String,
  reference: String,
  phone: String,
  instagram: String,
  address: {
    zipcode: String,
    street: String,
    district: String,
    complement: String,
    city: String,
    state: String
  }
});

CustomerModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Customer = mongoose.model('Customer', CustomerModel);

module.exports = Customer;
