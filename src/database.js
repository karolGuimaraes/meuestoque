const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
console.log(uri);

mongoose.connect(uri, { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

module.exports = mongoose;