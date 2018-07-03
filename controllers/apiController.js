const blogs = require('../data/blogs.json');

exports.blogs = async (req, res) => {
    res.json({
        status: 'success',
        blogs
    })
};
