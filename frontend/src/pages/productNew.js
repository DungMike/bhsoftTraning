import React from "react";
import { postNewProduct } from "../api/api";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../api/api";
import { useParams } from "react-router-dom";

const ProductNewPage = () => {
    const [inputNewProduct, setInputNewProduct] = React.useState({});
    const navigate = useNavigate();
    const [category, setCategory] = React.useState([]);
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = React.useState(null);
    React.useEffect(()=> {
      getCategories().then((res) => {
        setCategory(res.data);
        // console.log(res.data)
      })
    }, [])
    const onChangeInput = (e) => {
      const {name, value} = e.target;
         setInputNewProduct({...inputNewProduct, [name]: value});
         inputNewProduct.images = selectedImage;
         console.log(inputNewProduct);
    }
    const onSubmit  = async () => {
      postNewProduct(id, inputNewProduct, {}).then((res) => {
        if(res.data.status == 200){
          setInputNewProduct({});

        }
        console.log(res.data);
      });
      navigate("/product")
    }

    return(
       <div className="container">
          <form enctype="multipart/form-data" >
            <div className="product-infor">
              <div className="card mb-3" style={{maxWidth: 800}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    {/* <div className="form-group">
                      <input onChange={onChangeInput} value={inputNewProduct?.images} name="images" type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div> */}
                    {selectedImage && (
                      <div>
                      <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                      <br />
                      <button onClick={()=>setSelectedImage(null)}>Remove</button>
                      </div>
                     
                    )}
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <form role="form" method="post" encType="multipart/form-data">
                      <div className="form-group">
                        <label>Name</label>
                        <input onChange={onChangeInput} value={inputNewProduct?.email} required name="name" className="form-control" placeholder />
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <input onChange={onChangeInput} value={inputNewProduct?.price} required name="price" type="number" min={0} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea name="description" onChange={onChangeInput} value={inputNewProduct?.description} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                      </div>
                      
                      <div class="form-group">
                              <label>Danh mục</label>
                              <select  onChange={onChangeInput} name="cate_id" class="form-control">
                                  {
                                    category.map((category)=> {
                                      return(
                                        <option value={category?._id}>{category?.title}</option>
                                      )
                                    }
                                    )

                                  }
                                  
                          </select>
                      </div>


                      
                    </form>
                    </div>
                </div>
              </div>
              <hr width="100%" align="center" />
            </div>
            </form>
          <button onClick={onSubmit} type="submit" name="sbm" className="btn btn-primary">Submit</button>
</div>


    )
}
export default ProductNewPage;