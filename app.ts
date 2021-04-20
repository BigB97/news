const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const port = 3000;
const app = express();
const MongoDB = require('./db');
const { MONGODB_URI } = process.env;

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  MongoDB(MONGODB_URI);
  console.log(`Server started on ${port}`);
});
module.exports = app;
