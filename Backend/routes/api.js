const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiController'),
      productController = require('../controllers/productController'),
      expressJWT = require('express-jwt');

const JwtChecker = expressJWT({
    secret: "my-secret-keys"
});

// router.get('/posts', JwtChecker, apiController.fetchPosts);
router.get('/posts', apiController.fetchPosts);
router.get('/post/:id', apiController.postDetails);

// Products routes
router.get('/products', productController.fetchProducts);
router.get('/product/:id', productController.productDetails);
router.get('/create/product', productController.create);

module.exports = router;
