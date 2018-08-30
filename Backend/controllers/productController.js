const Product = require('../models/Product');

exports.fetchProducts = async (req, res) => {
    let page = req.query.page || 1;
    let query = {
        skip: 10 * (page - 1),
        limit: 10
    };

    const posts = await Product.find({}, {}, query).sort({_id: -1}).select({_id:1, title:1, description:1, price: 1, image:1, created_at:1});

    res.json({
        status: 'success',
        posts
    })
};

exports.productDetails = async (req, res) => {
    const post = await Product.findById(req.params.id).select({_id:1, title:1, description:1, price: 1, image:1, created_at:1});
    res.json({
        status: 'success',
        post
    })
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