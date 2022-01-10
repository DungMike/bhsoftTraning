const productModel = require("../models/product");


const editProduct = async (req,res) => {
    const id = req.params.id;

    try{

    const product = {
        name: req.body.name,
        images: req.file.path,
        description: req.body.description,
        cate_id: req.body.cate_id,
        price: req.body.price,
        cate: req.body.cate
      };
      await productModel.updateOne({_id: id}, {$set: product});
    return res.status(200).json(product)
    }
    catch(err){
      console.log(err)
    }
  }
module.exports = {
  editProduct: editProduct
}