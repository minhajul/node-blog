const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiController'),
      authController = require('../controllers/authController'),
      expressJWT = require('express-jwt');

const JwtChecker = expressJWT({
    secret: "my-secret-keys"
});

// router.get('/posts', JwtChecker, apiController.fetchPosts);

// posts routes
router.get('/posts', apiController.fetchPosts);
router.get('/post/:id', apiController.postDetails);

// products routes
router.get('/products', apiController.fetchProducts);
router.get('/product/:id', apiController.productDetails);
router.get('/create/product', apiController.create);


// auth routes
router.post('/login', authController.login);

module.exports = router;
