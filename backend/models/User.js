const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 11;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username is required!'
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: 'Email is required!'
    },
    password: {
        type: String,
        required: 'Password is required!'
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});


userSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});


// userSchema.methods.comparePassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
// };


module.exports = mongoose.model('User', userSchema);
