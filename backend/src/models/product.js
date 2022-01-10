const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    cate_id: {
        type: mongoose.Types.ObjectId,
        ref: "category",
        required: true
    },
    cate: {
        type: String,
        default: null
    },
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: false
    },
    description: {
        type: String,
        default: null
    },
    images: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: null
    },
    star: {
        type: Number,
        default: 5
    },
    


});
const productModel = mongoose.model("products", productSchema);
module.exports =  productModel;