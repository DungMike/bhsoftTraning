const productModel = require("../models/product");
const categoryModle = require("../models/category");
const slug = require("slug");
const fs = require("fs");
const path = require("path");
// need to upload
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploadImg = multer({storage: storage}).single('images');


const newProduct = async (req,res) => {
    try{
      
        const product = await productModel.create({
          name: req.body.name,
          images: req.file.path,
          description: req.body.description,
          cate_id: req.body.cate_id,
          price: req.body.price,
          cate: req.body.cate
        });
        return res.status(200).json(product);
      
    }
    catch(err) {
      console.log(err)
    }     
}
module.exports = {
    newProduct: newProduct,
    uploadImg: uploadImg
}
