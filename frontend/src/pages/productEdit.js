import React from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../api/api";
import {getCategories} from "../api/api";


const ProductEditPage = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = React.useState();
    const [category, setCategory] = React.useState([]);

    React.useEffect(() => {
        getProductDetail(id, {}).then((res)=> {
            setProduct(res.data);
            console.log(res.data);
        });
        getCategories().then((res) => {
            setCategory(res.data);
            console.log(category);
        })
    },[])
    return(
        <div className="container">
                        <a href="/product">home</a>

            <form action>
                <div className="product-infor">
                    <div className="card mb-3" style={{maxWidth: 800}}>
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`http://localhost:4000/${product?.images}`} className="card-img" alt="..." />
                            <div className="form-group">
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">Name: </h5>
                            <input type="text" placeholder={product?.name} />
                            <p>Price: </p>
                            <input type="number"  placeholder={product?.price}/>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={product?.description} />
                            </div>
                            <p>Categories: </p>
                            <form action="/action_page.php">
                            {
                                category.map((category)=> {
                                    return(
                                        <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
                                        <label htmlFor="vehicle1">{category.title}</label><br />
                                        </div>
                                    )
                                })
                            }
                                
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                <hr width="100%" align="center" />
                </div>
                <button type="submit" name="sbm" className="btn btn-primary">Submit</button>
            </form>
        </div>

        )
}
export default ProductEditPage;