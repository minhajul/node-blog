const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const chatSchema = new Schema({
    message:  String,
    username: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
});


module.exports = mongoose.model('Chat', chatSchema);
