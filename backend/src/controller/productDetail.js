const productModel = require("../models/product");
const commentModel = require("../models/comments");

const deleteOneProduct = (req, res) => {
    const id = req.params.id;
    console.log(id)
    productModel.deleteOne({ _id: id }, (err, data) => {
      
      if (data.deletedCount == 0) return res.json(` product doesn't exist in the first place.`);
      else if (err) return res.json(`Something went wrong, please try again. ${err}`);
      else return res.json(`Goodbye. product is deleted.`);
    });
  };
const getProductDetail = (req, res) => {
    
  const id = req.params.id;

    // console.log(id);
    productModel.findById(id, (err, data) => {
      if (err) {
      return res.json("Something is wrong");
      }
      return res.json(data);
    })
}

const getComments = (req, res) => {
  const id = req.params.id;
  commentModel.find({prd_id: id}, (err, data) => {
    if(err){
      return res.status(400).json("some think wrong");

    }
    return res.status(200).json(data)
  })
}

const postComment = async (req, res) => {
  try {
    

    const id = req.params.id;
    const {body, email, star} = req.body;
    // posst comnent and star  
    const newComment = await commentModel.create({
      email: email,
      body: body,
      // date: date,
       star: star,
      prd_id: id
    });
    // query ra các cmt, tong hop lai thanh 1 arr
    const newStar = await commentModel.find({prd_id: id}, (err, data) => {
      const arrStar = [];
      for(item of data) {
        arrStar.push(item.star);
      }
      console.log(arrStar);
      return arrStar;
      
      
    });
    // viet ham tinh trung binh cong
    const fnMediumStar = (x) => {
      var mediumStar = 0 ;
      for(let i = 0; i< x.length ; i++){
        mediumStar = mediumStar + x[i];
      }
      return (mediumStar/(x.length)).toFixed(2);
      console.log(mediumStar);
    }  
    // thuc thi ham trung binh cong voi bien la cac star trong comment

    let starUpdated = fnMediumStar(newStar);
     console.log(starUpdated);

     // 


     // update star cho product
    const productRated = await productModel.updateOne(
      {_id: id}, 
      { $set: {star:starUpdated } }, (err, data) => {
        console.log(data);
      }
    );

    console.log(newComment, productRated);


    return res.status(200).json(newComment,productrated );  
  }
  catch(err) {
    console.log(err)
  }
}
// const fnMediumStar = (x) => {
//   const mediumStar = 0 ;
//   for(const i = 0; i< x.length - 1; i++){
//     mediumStar = mediumStar + x[i];
//   }
//   return (mediumStar/(x.length)).toFixed(2);
// }  
// fnMediumStar(arrStar);

module.exports = {
    deleteOneProduct: deleteOneProduct,
    getProductDetail: getProductDetail,
    getComments: getComments,
    postComment: postComment

}