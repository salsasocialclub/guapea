const express = require('express');
const helmet = require('helmet');

const middlewares = require('./middlewares');
const usersAPI = require('./users');
const venuesAPI = require('./venues');

const app = express();

app.use(express.json());
app.use(helmet());
app.disable('x-powered-by')
// app.use(middlewares.<something>)

module.exports = (db) => {

  app.use('/v1/users', usersAPI(db, app));
  app.use('/v1/venues', venuesAPI(db, app));

  return app;
};
