const express = require('express'),
    router = express.Router(),
    homeController = require('../controllers/homeController');

const data = require('../data/blogs');

router.get('/', homeController.home);

router.get('/blog', (req, res, next) => {
    res.render('blog/index', {
        items : data
    })
});

router.get('/blog/:id', (req, res, next) => {
    res.render('blog/details', {
        item : data[req.params.id - 1]
    })
});


module.exports = router;
