const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/authController');

const { check } = require('express-validator/check');

router.get('/login', authController.loginView);
router.post('/login',[
    check('email').isEmail().withMessage("Email is not valid!"),
    check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 character!')
], authController.login);

module.exports = router;
