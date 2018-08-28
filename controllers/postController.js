const Post = require('../models/Post');

exports.index =  (req, res) => {
    const posts = getPosts();

    res.render('post/index', {
        posts
    })
};

exports.details = async (req, res) => {
    res.render('post/details', {
        blog : blogs[req.params.id - 1]
    })
};

async function getPosts(){
    return await Post.find();
}
