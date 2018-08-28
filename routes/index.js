const express = require('express'),
    router = express.Router(),
    homeController = require('../controllers/homeController'),
    blogController = require('../controllers/postController');

router.get('/', homeController.home);

router.get('/posts', blogController.index);

router.get('/post/:id', blogController.details);

module.exports = router;
