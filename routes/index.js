const express = require('express'),
    router = express.Router(),
    homeController = require('../controllers/homeController'),
    blogController = require('../controllers/blogController');

router.get('/', homeController.home);

router.get('/blog', blogController.index);

router.get('/blog/:id', blogController.details);


module.exports = router;
