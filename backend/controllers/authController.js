const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');

const users = [
    {id: 1, username:'minhaj', email: "minhaj@gmail.com", password: "123456"},
    {id: 2, username:'nai', email: "minhajul@maya.com.bd", password: "123456"},
    {id: 3, username:'nai', email: "sohel@gmail.com", password: "123456"}
];

exports.login = async (req, res) => {
    const schema = {
        email: Joi.string().required(),
        password: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
        return res.status(422).json({errors: result.error.details});
    }

    const {email, password} = req.body;

    const user = users.find(user => {
        return user.email === email && user.password === password;
    });

    if (!user) {
        sendErrorResponse(res, 500, 'failure', 'User not found. Please try again!');
    }

    const token = jwt.sign({
        sub: user.id,
        email: user.email
    }, "my-secret-keys", {expiresIn: "3 hours"});

    res.status(200)
        .json({
            'status': 'success',
            user,
            'token': token
        });
};

function sendErrorResponse(res, statusCode, status, message) {
    res.status(statusCode)
        .json({
            'status': status,
            'message': message
        });
}
