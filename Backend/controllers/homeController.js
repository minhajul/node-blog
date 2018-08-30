const Post = require('../models/Post');

exports.home = async (req, res) => {

    res.send('Yes!');

    // const posts = await Post.find().limit(9).sort({_id: -1});
    //
    // const user = req.session.user;
    //
    // res.render('index', {
    //     posts,
    //     user
    // });
};