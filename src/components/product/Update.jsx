import React, { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from '../../redux/slices/productSlice';
import { Link } from "react-router-dom";
import './Product.css'

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const ref = useRef();
  const [updateData, setUpdateData] = useState();
  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      const singleUser = data.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id,data]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  

  const handleUpdate = (e) => {
    e.preventDefault();
      dispatch(updateProduct(updateData))
      .then(() => {
        navigate('/listProduct');
      });
  };

   
  function resetForm(e) {
    e.preventDefault();
    ref.current.reset();
  }

  return (
 <form onSubmit={handleUpdate} ref={ref}>
<div className="card">
<div className="card-body" style={{width: "50rem"}}>
<h3 class="card-title" align="center">Update Product &nbsp;<Link to="/listProduct" class="btn px-4 btn-sm btn-outline-primary">List</Link></h3>
<div className="card-content">
 <div className="mb-3">
    <label for="Product Name" className="form-label">Product Name</label>
     <input
            type="text"
            name="name"
            required
            class="form-control"
            value={updateData && updateData.name}
            onChange={newData}
          />
   </div>
 <div className="mb-3">
    <label for="Product Price" className="form-label">Product Price</label>
   <input
            type="text"
            name="price"
            required
            class="form-control"
            value={updateData && updateData.price}
            onChange={newData}
          />
  </div>
  <div className="mb-3">
    <label for="Product Qantity" className="form-label">Product Qantity</label>
      <input
      type="text"
      name="qty"
      required
      class="form-control"
      value={updateData && updateData.qty}
      onChange={newData}
    />
  </div>
  <div className="w-80 mb-2 mt-2">
      <button type="submit" className="btn btn-info px-4">Update</button>
    <button type="submit" className="mx-2 px-4 btn btn-secondary" onClick={resetForm} >Reset</button>
   </div>

    </div>
  </div>
     </div>
       </form>
  );
};

export default UpdateProduct;