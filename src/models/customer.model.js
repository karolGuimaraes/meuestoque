const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const AddressModel = new mongoose.Schema({
  zipcode: String,
  street: String,
  district: String,
  complement: String,
  city: String,
  state: String
});

const CustomerModel = new mongoose.Schema({
  firstname: String,
  lastname: String,
  reference: String,
  phone: String,
  instagram: String,
  address: AddressModel
});

CustomerModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Customer = mongoose.model('Customer', CustomerModel);

module.exports = Customer;
