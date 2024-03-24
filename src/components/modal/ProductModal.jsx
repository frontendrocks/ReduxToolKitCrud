import React from "react";
import { useSelector } from "react-redux";
import "./ProductModal.css";

const ProductModal = ({ id, setShowPopup }) => {
  const allProduct = useSelector((state) => state.product.data);

  const singleProduct = allProduct.filter((ele) => ele.id === id);
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPopup(false)} className="btn btn-warning float-end">Close</button>
        
        <h3 align="center">Details</h3>
        <div>&nbsp;</div>
        <div className="px-2">
          <h5>Product Name: {singleProduct[0].name}</h5>
          <h5>Product Price: {singleProduct[0].price}</h5>
          <h5>Product Qty:   {singleProduct[0].qty}</h5>
        </div>
      </div>
</div>
  );
};

export default ProductModal;