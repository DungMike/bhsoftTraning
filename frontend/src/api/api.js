import axios from "axios";
const Http = axios.create({
    baseURL : "http://localhost:4000",
    
})
// login register

export const postLogin = ( data, config) => {
    return Http.post('/login', data, config)
}
export const postRegister = ( data) => {
    return Http.post('/register', data)
}

// products
export const postNewProduct = (data) => {
    return Http.post("/product/new", data)
}
export const postEditProduct = (data, id) => {
    return Http.post(`/product/edit/${id}`)
}
export const getProduct = (config, data) => {
    return Http.get('/product', config);
}
export const getProductDetail = (id) => {
    return Http.get(`/product/details/${id}`)
}
export const getProductBySearch= (q) => {
    return Http.get(`/product/search?q=${q}`)
}
export const deleteProduct = (id) => {
    return Http.delete(`/product/delete/${id}`)
}
// category 
export const getCategories = () => {
    return Http.get('/categories');
}
export const getProductByCategory = (id) => {
    return Http.get(`/category/${id}/product`)
}

// comment

export const getCommentProduct = (id) => {
    return Http.get(`/product/comment/${id}`);
}
export const postCommentProduct = (id) => {
    return Http.post(`/product/comment/${id}`);
}