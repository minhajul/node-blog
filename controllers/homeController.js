const Post = require('../models/Post');

exports.home = async (req, res) => {
    const posts = await Post.find().limit(9).sort({_id: -1});

    res.render('index', {
        posts
    });
};