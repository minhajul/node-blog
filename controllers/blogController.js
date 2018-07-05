const blogs = require('../data/blogs.json');

exports.index = async (req, res) => {
    res.render('blog/index', {
        blogs
    })
};

exports.details = async (req, res) => {
    res.render('blog/details', {
        blog : blogs[req.params.id - 1]
    })
};

