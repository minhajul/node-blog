const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const productSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Product', productSchema);
