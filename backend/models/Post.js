const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
    title: {
        type: String
    },
    details: {
        type: String
    },
    author: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
});


module.exports = mongoose.model('Post', postSchema);
