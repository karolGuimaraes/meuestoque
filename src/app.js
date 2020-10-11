const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', (req, res) => res.send('HI'));

app.listen(port, () => console.log(`Running in  http://${host}:${port}`));