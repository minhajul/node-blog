const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/authController');

router.get('/login', authController.loginView);
router.post('/login', authController.emailLogin);
router.get('/logout', authController.logout);

module.exports = router;
