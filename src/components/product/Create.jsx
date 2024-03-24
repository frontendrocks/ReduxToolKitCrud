import { useState, useRef } from "react"
import { useDispatch } from "react-redux";
import { createProduct } from '../../redux/slices/productSlice';
import { Link, useNavigate } from "react-router-dom";
import './Product.css'


const  CreateProduct = () => {

  const [products, setProducts] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef();

  function getProductData(e) {
        setProducts({ ...products, [e.target.name]: e.target.value });
    }
    
  function handleProduct(e) {
    e.preventDefault();
    if (!products.name || !products.price || !products.qty) {
      return
    } else {
        dispatch(createProduct(products))
      .then(() => {
        navigate('/listProduct');
      });
    }
    
  }
  
  function resetForm(e) {
    e.preventDefault();
    ref.current.reset();
  }

    return (
  <form onSubmit={handleProduct} ref={ref}>
   <div class="card" style={{width: "50rem"}}>
  <div class="card-body">
    <h3 class="card-title" align="center">Add Product &nbsp;<Link to="/listProduct" class="btn btn-sm btn-outline-info">List</Link></h3>
<div className="card-content">
 <div className="mb-3">
    <label for="Product Name" className="form-label">Product Name</label>
    <input type="text" required name="name" className="form-control"  id="name" onChange={getProductData} aria-describedby="name" />
   </div>
 <div className="mb-3">
    <label for="Product Price" className="form-label">Product Price</label>
    <input type="text" required  name="price" className="form-control"  onChange={getProductData} id="price"  />
  </div>
  <div className="mb-3">
    <label for="Product Qantity" className="form-label">Product Qantity</label>
    <input type="text" required  name="qty" className="form-control"  onChange={getProductData} id="qty" />
  </div>
  <div className="w-80 mb-2 mt-4">
      <button type="submit" className="btn btn-primary px-4" >Submit</button>
    <button type="submit" className="mx-2 px-4 btn btn-secondary" onClick={resetForm} >Reset</button>
   </div>

    </div>
  </div>
</div>
</form>
    )
}

export default CreateProduct;