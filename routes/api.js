const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiController'),
      expressJWT = require('express-jwt');

const JwtChecker = expressJWT({
    secret: "my-secret-keys"
});

router.get('/blogs', JwtChecker, apiController.blogs);

module.exports = router;
