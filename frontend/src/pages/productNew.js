import React from "react";
import { postNewProduct } from "../api/api";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../api/api";
import { useParams } from "react-router-dom";

const ProductNewPage = (props) => {
    const [inputNewProduct, setInputNewProduct] = React.useState({});
    const navigate = useNavigate();
    const [category, setCategory] = React.useState([]);
    // const { id } = useParams();
    const [file, setFile] = React.useState('');
    React.useEffect(()=> {
      getCategories().then((res) => {
        setCategory(res.data);
        // console.log(res.data)
      })
    }, [])
    const onChangeInput = (e) => {
      const {name, value} = e.target;
         setInputNewProduct({...inputNewProduct, [name]: value});
        //  inputNewProduct.images = file;
         console.log(inputNewProduct);
    }
    const onSubmit  = async () => {
      const formData = new FormData();
      formData.append(file, inputNewProduct);
      await postNewProduct( formData, {});
      props.getsingle();
      navigate("/product")
      
    }
    

    return(
       <div className="container">
          <form onSubmit={onSubmit} encType="multipart/form-data" >
            <div className="product-infor">
              <div className="card mb-3" style={{maxWidth: 800}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    {/* <div className="form-group">
                      <input onChange={onChangeInput} value={inputNewProduct?.images} name="images" type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div> */}
                    {file && (
                      <div>
                      <img alt="not fount" width={"250px"} src={URL.createObjectURL(file)} />
                      <br />
                      <button onClick={()=>setFile(null)}>Remove</button>
                      </div>
                     
                    )}
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event);
                        setFile(event.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    {/* <form role="form" method="post" encType="multipart/form-data"> */}
                      <div className="form-group">
                        <label>Name</label>
                        <input onChange={onChangeInput} value={inputNewProduct?.email} required name="name" className="form-control"  />
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <input onChange={onChangeInput} value={inputNewProduct?.price} required name="price" type="number" min={0} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea name="description" onChange={onChangeInput} value={inputNewProduct?.description} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                      </div>
                      
                      <div className="form-group">
                              <label>Danh mục</label>
                              <select  onChange={onChangeInput} name="cate_id" className="form-control">
                                  {
                                    category.map((category, i)=> {
                                      return(
                                        <option key={i} value={category?._id}>{category?.title}</option>
                                      )
                                    }
                                    )

                                  }
                                  
                          </select>
                      </div>


                      
                    {/* </form> */}
                    </div>
                </div>
              </div>
              <hr width="100%" align="center" />
            </div>
            <button  type="submit" name="sbm" className="btn btn-primary">Submit</button>

          </ form>
</div>


    )
}
export default ProductNewPage;