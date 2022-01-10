import React from "react";

import { getProductBySearch } from "../api/api";
import { getCategories } from "../api/api";
import ProductItem from "../components/product/product";
import queryString from "query-string";

// import {push} from 'react-router-redux';
// import qs from 'querystring'
import { Link,useNavigate } from "react-router-dom";

require('../css/productList.css');

const ProductListSearch = (props) => {

    const key = queryString.parse(window.location.search).q;
    console.log(key);

    const navigate = useNavigate();

    
    const [product, setProduct] =React.useState([]);
    const [category, setCategory] = React.useState([]);
    // const [key, setKey] = React.useState("");
    React.useEffect(async () => {
        
        
        getProductBySearch(key, {}).then((res)=>{
            setProduct(res.data);
            console.log(res.data)
        })
        getCategories().then((res) => {
            setCategory(res.data);
        })
    }, [])
    // const handleOnChangeInput = (e)=>{
    //     const {value} = e.target;
    //     setKey(value);
    //     console.log(key);
    // }
    // const handleOnSubmit = (e)=>{
    //     e.preventDefault();
    //     navigate.push(`/search?q=${key}`);
    // }

    return(

        <div>
            <div id="header">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                    <a href="/">
                    <h4>Product list</h4>
                    </a>
                    <button style={{width: 50, borderRadius: 5}}><a href="/product/new">New</a></button>
                    </div>
                    <div id="search" className="col-lg-6 col-md-6 col-sm-12">
                    

                    </div>
                    <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
                        <a href="/login">Login</a>
                    </div>
                </div>
                </div>
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon" />
                </button>
            </div>
            {/*	End Header	*/}
            {/*	Body	*/}
            <div id="body">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <nav>
                        <div id="menu" className="collapse navbar-collapse">
                        <ul>
                            {
                                category.map((category)=> {
                                    return(
                                        <li className="menu-item"><a href={`/product-category-${category._id}`}>{category.title}</a></li>
                                    )
                                })
                            }
                            
                           
                        </ul>
                        </div>
                    </nav>
                    </div>
                </div>
                <div className="row">
                    <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                    {/*	Slider	*/}
                    {/*	End Slider	*/}
                    {/*	Feature Product	*/}
                    <div className="products">
                        <div className="product-list card-deck">
                        <div className="card-deck">
                            {
                                product.map((product) => {
                                    return <ProductItem item = {product}/>
                                })
                            }
                            
                            
                            
                            
                        </div>
                        </div>
                    </div>
                    {/*	End Feature Product	*/}
                    {/*	Latest Product	*/}
                    {/*	End Latest Product	*/}
                    </div>
                </div>
                </div>
            </div>
            {/*	End Body	*/}
            <div id="footer-top">
                <div className="container">
                <div className="row">
                    <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
                    <h2><a href="#"><img src="data:image/png;base64,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" /></a></h2>
                    <p>
                        Quán rượu Bắc Hà tưng bừng khai trương. Chúng tôi chuyên bán đủ loại rượu từ truyền thống như rượu gạo, táo mèo đến rượu cho sinh viên như cồn pha nước 
                    </p>
                    </div>
                    <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Địa chỉ</h3>
                    <p>Số 16 Duy Tan - Hà Nội</p>
                    </div>
                    <div id="service" className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Dịch vụ</h3>
                    <p>Đưa về tận nếu say không về được</p>
                    <p>Diễn hiện trường giả trốn vợ, trốn phụ huynh hỏi thăm</p>
                    </div>
                    <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Hotline</h3>
                    <p>Phone Sale: 1900 1919</p>
                    <p>Email:ruoungon-bhsoftware@gmail.com</p>
                    </div>
                </div>
                </div>
            </div>
            {/*	Footer	*/}
            <div id="footer-bottom">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>
                        Rượu Bắc Hà - ngon như người yêu cũ.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
export default ProductListSearch;