const mongoose = require('mongoose');

mongoose.connect('')
    .then(() => console.log('Connected to Mongodb'))
    .catch((error) => console.error('Error while connecting to mongodb'+ error));

// import all of our models
require('../models/Post');
