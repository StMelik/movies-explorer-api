const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const error = require('./middlewares/error.middleware');
const { requestLogger, errorLogger } = require('./middlewares/logger.middleware')

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(requestLogger)

app.use(routes);

app.use(errorLogger)

app.use(error);

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
});
