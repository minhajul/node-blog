const Post = require('../models/Post');

exports.fetchPosts = async (req, res) => {
    const posts = await Post.find().sort({_id: -1}).select({_id:1, title:1, details:1, created_at:1});

    res.json({
        status: 'success',
        posts
    })
};
