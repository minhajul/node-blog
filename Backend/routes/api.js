const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiController'),
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

module.exports = router;
