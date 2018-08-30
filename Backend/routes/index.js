const express = require('express'),
    router = express.Router(),
    homeController = require('../controllers/homeController'),
    postController = require('../controllers/postController');

router.get('/', homeController.home);

router.get('/posts', postController.index);

router.get('/post/:id', postController.details);

module.exports = router;
