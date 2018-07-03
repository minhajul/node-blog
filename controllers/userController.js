const jwt = require('jsonwebtoken');

const users = [
    {id: 1, username: "minhaj", password: "123456"},
    {id: 1, username: "sohel", password: "123456"}
];

exports.login = async (req, res) => {
    const username = req.body.username,
        password = req.body.password;

    if (!username || !password) {
        sendErrorResponse(res, 500, 'failure', 'Authentication failed. Please try again!');
    }

    const user = users.find(user => {
        return user.username === username && user.password === password;
    });

    if (!user){
        sendErrorResponse(res, 500, 'failure', 'User not found. Please try again!');
    }

    const token = jwt.sign({
        sub: user.id,
        username: user.username
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
