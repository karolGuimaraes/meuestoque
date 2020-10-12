const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const mainRoute = require('./routes/main');
app.use('/', userRoute, productRoute, mainRoute);

app.listen(port, () => console.log(`Running in  http://${host}:${port}`));