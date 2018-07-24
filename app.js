const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const hbs = require('hbs');
const fs = require('fs');

const partialsDir = __dirname + '/views/partials';

const fileNames = fs.readdirSync(partialsDir);

fileNames.forEach((filename) => {
    let matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
        return;
    }
    let name = matches[1];
    let template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
    hbs.registerPartial(name, template);
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(__dirname +'/public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
const index = require('./routes/index');
const auth = require('./routes/auth');
const api = require('./routes/api');

app.use('/', index);
app.use('/auth', auth);
app.use('/api/v1', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
