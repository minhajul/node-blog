const Post = require('../models/Post');

exports.index = async (req, res) => {
    const posts = await Post.find().sort({_id: -1});

    const user = req.session.user;

    res.render('post/index', {
        posts,
        user
    })
};

exports.details = async (req, res) => {
    const post = await Post.findById(req.params.id);

    const user = req.session.user;

    res.render('post/details', {
        post,
        user
    })
};

