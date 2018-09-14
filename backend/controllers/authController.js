const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email: email});

    if (!user) {
        sendErrorResponse(res, 500, 'failure', 'User not found. Please try again!');
    }

    const isMatch = checkPassword(user, password);

    if (!isMatch){
        sendErrorResponse(res, 500, 'failure', 'Password does not match!');
    }

    const token = jwt.sign({
        sub: user.id,
        email: user.email
    }, "my-secret-keys", {expiresIn: "3 hours"});

    res.status(200)
        .json({
            'status': 'success',
            'user': user,
            'token': token
        });
};


exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const user = new User({
            username, email, password
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch (e) {
        res.send(e.message);
    }

};

function checkPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
}

function sendErrorResponse(res, statusCode, status, message) {
    res.status(statusCode)
        .json({
            'status': status,
            'message': message
        });
}
