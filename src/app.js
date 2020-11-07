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
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');
const categoryRoute = require('./routes/category.route');
const customerRoute = require('./routes/customer.route');
const invoiceRoute = require('./routes/invoice.route');
const saleRoute = require('./routes/sale.route');
app.use('/', mainRoute, userRoute, productRoute, 
            categoryRoute, customerRoute, invoiceRoute,
            saleRoute);

app.listen(port, () => console.log(`Running in http://${host}:${port}`));