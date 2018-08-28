const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('User', userSchema);
