const jwt = require('jsonwebtoken');

const users = [
    {id: 1, email: "minhaj@gmail.com", password: "123456"},
    {id: 2, email: "minhajul@maya.com.bd", password: "123456"},
    {id: 3, email: "sohel@gmail.com", password: "123456"}
];

exports.loginView = (req, res) => {
    res.render('pages/auth/index');
};


exports.login = async (req, res) => {
    const email = req.body.email,
        password = req.body.password;


    if (!email || !password) {
        sendErrorResponse(res, 500, 'failure', 'Authentication failed. Please try again!');
    }

    const user = users.find(user => {
        return user.email === email && user.password === password;
    });

    if (!user){
        sendErrorResponse(res, 500, 'failure', 'User not found. Please try again!');
    }

    const token = jwt.sign({
        sub: user.id,
        email: user.email
    }, "my-secret-keys", {expiresIn: "3 hours"});

    res.status(200)
        .send({
            'status': 'success',
            'token': token
        });
};

function sendErrorResponse(res, statusCode, status, message) {
    res.status(statusCode)
        .send({
            'status': status,
            'message': message
        });
}