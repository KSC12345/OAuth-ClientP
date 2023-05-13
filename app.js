var express = require('express');
var logger = require('./log/log');
var httpLogger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var config = require('./config');
var memberRoute = require('./routes/member');
var app = express();
var responseHelper = require('./helper/responseHelper');


// connect to mongo db

//setup the app
app.use(httpLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/profile', memberRoute);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  err.status = err.status || 500;
  //return the error as json
  logger.warn(`ERROR -- ${err.status} ${err.message}`);
  res.status(err.status || 500).json(responseHelper.errorResponse(err));
});

module.exports = app;
