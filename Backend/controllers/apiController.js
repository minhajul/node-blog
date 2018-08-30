const Post = require('../models/Post');
const Product = require('../models/Product');

exports.fetchPosts = async (req, res) => {
    let query = getQuery(req);

    try {
        const posts = await Post.find({}, {}, query).sort({_id: -1}).select({_id:1, title:1, details:1, created_at:1});
        return respondSuccess(res, posts);
    }catch (error) {
        return respondError(res, error);
    }
};

exports.postDetails = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).select({_id:1, title:1, details:1, created_at:1});
        return respondSuccess(res, post);
    }catch (error) {
        return respondError(res, error);
    }
};

exports.fetchProducts = async (req, res) => {
    let query = getQuery(req);

    try {
        const products = await Product.find({}, {}, query).sort({_id: -1}).select({_id:1, title:1, description:1, price: 1, image:1, created_at:1});
        return respondSuccess(res, products);
    }catch (error) {
        return respondError(res, error);
    }
};

exports.productDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).select({_id:1, title:1, description:1, price: 1, image:1, created_at:1});
        return respondSuccess(res, product);
    }catch (error) {
        return respondError(res, error);
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


function getQuery(req) {
    let page = req.query.page || 1;
    return {
        skip: 10 * (page - 1),
        limit: 10
    };
}

function respondSuccess(res, data){
    res.json({
        status: 'success',
        data: data
    });
}

function respondError(res, error){
    res.status(500).json({
        status: 'failure',
        error: error.message,
        data: null
    })
}