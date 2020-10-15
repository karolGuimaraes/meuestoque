const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const mainRoute = require('./routes/main');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const categoryRoute = require('./routes/categoryRoute');
const customerRoute = require('./routes/customerRoute');
const invoiceRoute = require('./routes/invoiceRoute');
app.use('/', mainRoute, userRoute, productRoute, 
            categoryRoute, customerRoute, invoiceRoute);

app.listen(port, () => console.log(`Running in http://${host}:${port}`));