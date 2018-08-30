const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

app.listen(3000, () => console.log('App is running on port: 3000'));

mongoose.connect('mongodb://localhost:27017/blogs')
    .then(() => console.log('Connected to Mongodb'))
    .catch((error) => console.error('Error while connecting to mongodb'));

// Load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
    if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));

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
  res.json({
      status: 'failure',
      code: err.status
  });
});


const Chat = require('./models/Chat');

const io = require('socket.io').listen(3001).sockets;

io.on('connection', async (socket) => {
    const messages = await Chat.find().limit(20).sort({_id: 1});

    io.emit('MESSAGES', messages);

    socket.on('SEND_MESSAGE', async (data) => {
        const newChat = new Chat({
            message: data.message,
            user: data.user
        });

        newChat.save((err, result) => {
            if (!err){
                io.emit('MESSAGE', result);
            }
        });
    });
});

module.exports = app;
