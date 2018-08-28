const Post = require('../models/Post');

exports.home = async (req, res) => {
    const posts = await Post.find();

    res.render('index', {
        posts
    });
};