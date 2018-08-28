const Post = require('../models/Post');

exports.index = async (req, res) => {
    const posts = await Post.find().sort({_id: -1});

    res.render('post/index', {
        posts
    })
};

exports.details = async (req, res) => {
    const post = await Post.findById(req.params.id);

    res.render('post/details', {
        post
    })
};
