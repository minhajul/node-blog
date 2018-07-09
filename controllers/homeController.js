const blogs = require('../data/blogs.json');

exports.home = async (req, res) => {
    res.render('index', {
        blogs
    });
};
