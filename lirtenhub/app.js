var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var index = require('./routes/index');
const api = require('./routes/api/index');
var book = require('./routes/book');
var auth = require('./routes/auth');
var app = express();


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://Elshazly:SE*998877@lirten-hub-uagkz.mongodb.net/test?retryWrites=true', { promiseLibrary: require('bluebird'),useNewUrlParser: true  } )
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
mongoose.set('useCreateIndex', true)

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', index);
app.use('/api', api);
app.use('/api/book', book);
app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  
  if (req.app.get('env') !== 'development') {
  delete err.stack;
  }
  
  res.status(err.statusCode || 500).json(err);
  });

module.exports = app;