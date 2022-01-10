const express = require('express');
const { Router } = require("express");
const router = express.Router();

var cors = require('cors')
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
const login = require("../controller/login");
const register = require("../controller/register");
const home = require("../controller/home");
const auth = require("../middleware/auth");
const newCategory = require("../controller/newCategory");
const newProduct = require("../controller/productNew");
const edit = require("../controller/productEdit");
const detail = require("../controller/productDetail");


// routerouter.get("/login")
router.post("/login", login.postLogin);
router.post("/register", register.postRegister);
// router.get("/home",auth, home.home );
//category
router.post("/category/new",newCategory.newCategory );
router.get("/categories",newCategory.getAllCate )
router.get("/category/:id/product", home.getProductByCategory)
// product
router.post("/product/new",newProduct.uploadImg, newProduct.newProduct );
router.get("/product"  ,auth.verifyToken, home.getAllProduct )
router.delete("/product/delete/:id", detail.deleteOneProduct );
router.put("/product/edit/:id", newProduct.uploadImg, edit.editProduct);
router.get("/product/details/:id", detail.getProductDetail)
router.get("/product/search",home.searchProduct )
// router.get("/product/category-:id",home.getProductByCategory );
// ,auth.verifyToken
// comment
router.get("/product/comment/:id", detail.getComments);
router.post("/product/comment/:id", detail.postComment);
module.exports = router;
