import './App.css';
import React from "react";
// import axios from "axios";
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import useHistory from "react-router-dom";
// import pages
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProductDetailPage from './pages/productDetail';
import ProductEditPage from './pages/productEdit';
import ProductListPage from './pages/productList';
import ProductNewPage from './pages/productNew';
import CategoryPage from './pages/category';
import ProductListSearch from './pages/search';
const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

        <Route exact path="/" element={<ProductListPage/>} />
        <Route exact path="/product/new" element={<ProductNewPage/>} />

        {/* <Route path="/category-:id" element={<CategoryPage/>} /> */}
        <Route path="/product/details/:id" element={<ProductDetailPage/>} />
        <Route path="/product/edit/:id" element={<ProductEditPage/>} />
        <Route path="/category/:id/product/" element={<CategoryPage/>} />
        <Route path="/search" element={<ProductListSearch/>} />
      </Routes>
    </Router>
  )
}

export default App;
