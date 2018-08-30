const Post = require('../models/Post');
const Product = require('../models/Product');

exports.fetchPosts = async (req, res) => {
    let page = req.query.page || 1;
    let query = {
        skip: 10 * (page - 1),
        limit: 10
    };

    try {
        const posts = await Post.find({}, {}, query).sort({_id: -1}).select({_id:1, title:1, details:1, created_at:1});
        res.json({
            status: 'success',
            posts
        })
    }catch (error) {
        res.json({
            status: 'failure',
            error: error.message,
            posts: []
        })
    }
};

exports.postDetails = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).select({_id:1, title:1, details:1, created_at:1});
        res.json({
            status: 'success',
            post
        })
    }catch (error) {
        res.json({
            status: 'failure',
            error: error.message,
            post: null
        })
    }
};

exports.fetchProducts = async (req, res) => {
    let page = req.query.page || 1;
    let query = {
        skip: 10 * (page - 1),
        limit: 10
    };

    try {
        const products = await Product.find({}, {}, query).sort({_id: -1}).select({_id:1, title:1, description:1, price: 1, image:1, created_at:1});

        res.json({
            status: 'success',
            products
        });
    }catch (error) {
        res.json({
            status: 'failure',
            error: error.message,
            products: []
        })
    }

};

exports.productDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).select({_id:1, title:1, description:1, price: 1, image:1, created_at:1});
        res.json({
            status: 'success',
            product
        });
    }catch (error) {
        res.json({
            status: 'failure',
            error: error.message,
            product: null
        })
    }
};


exports.create = async (req, res) => {
    const product = new Product({
        title: 'Product name',
        description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates',
        price: '99',
        image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(5).jpg'
    });

    await product.save();
};
