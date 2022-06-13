const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(routes);

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
})