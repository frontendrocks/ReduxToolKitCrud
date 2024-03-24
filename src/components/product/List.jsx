import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct, deleteProduct } from '../../redux/slices/productSlice';
import { Link } from "react-router-dom";
import ProductModal from "../modal/ProductModal";
import loaderImg from '../../assets/loader.gif';

const ProductList = () => {
    const dispatch = useDispatch();
    const { data, isLoading, searchData } = useSelector(state => state.product);
    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    dispatch(listProduct())
  }, [dispatch]);
  
    return (
      <div className="mt-4 main mb-4">
        <h3>Product List <Link to="/createProduct" className="btn btn-success">Add Product</Link></h3>
            {showPopup && (
                <ProductModal
                id={id}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                />
            )}
        {
          isLoading ? <div className="loaderImg"><img height="150px" src={loaderImg} alt="loading" /></div> :
           
            data.length === 0 ? <div className="d-flex justify-content-center pt-4 text-danger">
              <h4>No Data found...</h4></div> : data && data.filter((ele) => {
                 if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
               }).map((ele) => 
                  
                 <div key={ele.id} className="card w-80 mx-auto my-2">
                <div className="card-body">
                  <h5 className="card-title">Produuct Name: {ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Product Price: {ele.price}</h6>
                  <p className="card-text">Product Qty: {ele.qty}</p>
                  <button
                    className="card-link btn btn-primary"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link btn btn-secondary">
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteProduct(ele.id))}
                    className="card-link btn btn-danger"
                  >
                    Delete
                  </Link>
                </div>
                 </div>

            )}
      </div>
    )
}

export default ProductList;