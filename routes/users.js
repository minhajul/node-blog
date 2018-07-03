const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('respond with a resource');
});


router.post('/login', userController.login);


module.exports = router;
