import React from "react";
import { getProductDetail } from "../api/api";
import { deleteProduct } from "../api/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCommentProduct } from "../api/api";
import { postCommentProduct } from "../api/api";
const ProductDetailPage = () => {

    const navigate = useNavigate();

    // const id = props.match.params.id;
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = React.useState();
    const [comment, setComment] = React.useState([]);
    const deletePro = () => {
        
        deleteProduct(id, {});
        navigate("/product")


    }
    React.useEffect(() => {
        getProductDetail(id, {}).then((res)=> {
            setProduct(res.data);
        });
        getCommentProduct(id, {}).then((res) => {
            setComment(res.data);
            console.log(res.data)
        })
    }, [] )
    return(

        <div className="container">
            <a href="/product">home</a>
            <div className="product-infor">
                <div className="card mb-3" style={{maxWidth: 800}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={`http://localhost:4000/${product?.images}`} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product?.name}</h5>
                        <p className="card-text">{product?.description}</p>
                        <p className="card-text">
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        </p>
                        <p>Category: {product?.cate}</p>
                        <button onClick={deletePro}>Delete</button>
                        <a href={`/product/edit/${product?._id}`}><button>Edit</button></a> 
                    </div>
                    </div>
                </div>
                </div>
                <hr width="100%" align="center" />
            </div>
            <div className="new-review">
                <p className="card-text">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
                <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
                <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
                <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
                <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
                </p>
                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Your review</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <button type="button" className="btn btn-dark"> Submit your review</button>
                <hr width="100%" align="center" />
            </div>
            <div className="all-review">
                <h5>All review</h5>
                <div className="review">
                    <div className="user" style={{display: 'flex'}}>
                        <div className="ratering" style={{padding: 10}}>                        
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                        </div>
                        <div className="mail" style={{padding: 10}}>
                        <p>hivk15c3@gmail.com</p>
                        </div>
                        <div className="mail" style={{padding: 10}}>
                        <p>DD/MM/YYYY</p>
                        </div>
                    </div>
                    <div className="review-content">
                        <p>Sản phầm không tốt lắm, uống nhiều bị say, Sản phầm không tốt lắm, uống nhiều bị saySản phầm không tốt lắm, uống nhiều bị saySản phầm không tốt lắm, uống nhiều bị saySản phầm không tốt lắm, uống nhiều bị say </p>
                    </div>
                </div>
                {
                    comment.map((comment)=> {
                        return (
                            <div className="review">
                            <div className="user" style={{display: 'flex'}}>
                                <div className="ratering" style={{padding: 10}}>                        
                                <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                                <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                                <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                                <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                                <img src="https://img.icons8.com/ios-glyphs/20/000000/star--v1.png" />
                                </div>
                                <div className="mail" style={{padding: 10}}>
                                <p>{comment?.email}</p>
                                </div>
                                <div className="mail" style={{padding: 10}}>
                                <p>{comment?.createdAt.slice(0,10)}</p>
                                </div>
                            </div>
                            <div className="review-content">
                                <p>{comment?.body}</p>
                            </div>
                        </div>
                        )
                    })
                    
                        
                }
                
            </div>
            </div>

    )
}
export default ProductDetailPage;