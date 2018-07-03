const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiController');

router.get('/blogs', apiController.blogs);

module.exports = router;
