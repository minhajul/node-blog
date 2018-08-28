const Post = require('../models/Post');

exports.home = async (req, res) => {
    const posts = await Post.find().limit(9).sort({_id: -1});

    const user = req.session.user;

    console.log(user);

    res.render('index', {
        posts,
        user
    });
};