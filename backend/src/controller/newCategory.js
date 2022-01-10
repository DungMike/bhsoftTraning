const categoryModle = require("../models/category");

const newCategory = async (req, res)=> {
    try{
        const {title, slug} = req.body;
        const oldCategory = await categoryModle.findOne({title});
        if(oldCategory){
            return res.status(400).send("type of produc is exits, choose other name");
        }
        const product = await categoryModle.create({
            title: title,
            slug: slug
        });
        res.status(200).json(product);
    }
    catch (err) {
        console.log(err);
    }
}
const getAllCate = (req, res) => {
    categoryModle.find({}, (err, data) => {
        if (err) {
        return res.json("Something is wrong. Please contact admin.");
        }
        return res.json(data);
    });
};

module.exports = {
    newCategory: newCategory,
    getAllCate: getAllCate
}