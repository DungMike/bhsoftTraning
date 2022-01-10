const productModel = require("../models/product");


const editProduct = async (req,res) => {
    const id = req.params.id;


    const product = productModel.updateOne({id: id},{
        name: req.body.name,
        images: req.file.path,
        description: req.body.description,
        cate_id: req.body.cate_id,
        price: req.body.price
      });
    //   res.status(200).json(product);
      return res.json("A product is edited.");
}
module.exports = {
    editProduct: editProduct
}