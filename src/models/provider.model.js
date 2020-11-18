const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const ProviderModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  phone: String
});

ProviderModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Provider = mongoose.model('Provider', ProviderModel);

module.exports = Provider;