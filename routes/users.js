const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/userController');

router.post('/login', userController.login);

module.exports = router;
