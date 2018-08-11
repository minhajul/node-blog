const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/authController');

router.get('/login', authController.loginView);

router.post('/login', authController.login);

module.exports = router;
