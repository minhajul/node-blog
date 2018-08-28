const Post = require('../models/Post');

exports.fetchPosts = async (req, res) => {
    let page = req.query.page || 1;
    let query = {
        skip: 10 * (page - 1),
        limit: 10
    };

    const posts = await Post.find({}, {}, query).sort({_id: -1}).select({_id:1, title:1, details:1, created_at:1});

    res.json({
        status: 'success',
        posts
    })
};

exports.postDetails = async (req, res) => {
    const post = await Post.findById(req.params.id).select({_id:1, title:1, details:1, created_at:1});
    res.json({
        status: 'success',
        post
    })
};