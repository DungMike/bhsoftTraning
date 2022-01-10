import React from "react"


const ProductItem = ({item}) => {
    return(
        <div className="card">

            <img src={`http://localhost:4000/${item.images}`} className="card-img-top" />

            <div className="card-body ">
                <a href={`/product/details/${item._id}`}>{item.name}</a> <span>{item.price}$</span> 
                <br/>
                <a href={`/category/${item.cate_id}/product`}>{item.cate}</a>
                <p className="card-text"><small className="text-muted">
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                </small></p>
            </div>
        </div>
    )
} 

export default ProductItem