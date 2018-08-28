const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiController'),
      expressJWT = require('express-jwt');

const JwtChecker = expressJWT({
    secret: "my-secret-keys"
});

// router.get('/posts', JwtChecker, apiController.fetchPosts);
router.get('/posts', apiController.fetchPosts);
router.get('/post/:id', apiController.postDetails);

module.exports = router;
