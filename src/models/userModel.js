const bcrypt = require('bcryptjs');
const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const UserModel = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  name: String,
  password: {
    type: String,
    require: true,
    select: false
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },
  phone: String,
  lastlogin: Date,
  admin: Boolean
})

UserModel.pre('save', async function(next) {
  const hash =  await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
})

UserModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const User = mongoose.model('User', UserModel);

module.exports = User;
