const productModel = require("../models/product");

const getAllProduct = (req, res) => {
    productModel.find({}, (err, data) => {
        if (err) {
            return res.json("Something is wrong. Please contact admin.");
        }
        return res.json(data);
    });
};
const getProductByCategory = (req, res) => {
    const id = req.params.id;

    productModel.find({cate_id: id}, (err, data) => {
        if(err) {
            return res.status(400).json("some thing wrong");
        }
        return res.status(200).json(data);
    })
}
const searchProduct = (req, res) => {
    const key = req.query.key;
    console.log(key);
    if(!key || key ===""){
        return res.status(400).json("key is empty")
    }
    
    console.log(key);
    
    productModel.find({
        name: {$regex: key}
    }
            , (err, data) => {
                                if(err) {
                                    return res.status(400).json("some thing wrong");
                                }

        console.log(data);
        return res.status(200).json(data);
    })
}


module.exports = {
    getAllProduct: getAllProduct,
    getProductByCategory: getProductByCategory,
    searchProduct: searchProduct
}