const blog = require('../data/blogs.json');

exports.fetchBlog = async (req, res) => {
    res.json({
        status: 'success',
        blog
    })
};
