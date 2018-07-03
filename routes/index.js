var express = require('express'),
    router = express.Router();

const data = [
    {
        id: 1,
        title: 'Heading One',
        body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    },
    {
        id: 2,
        title: 'Heading Two',
        body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    },
    {
        id: 3,
        title: 'Heading Three',
        body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    },
    {
        id: 4,
        title: 'Heading Four',
        body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    }
];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express App' });
});

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
