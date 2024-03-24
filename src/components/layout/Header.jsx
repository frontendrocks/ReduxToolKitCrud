import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from '../../redux/slices/productSlice';
import logo from '../../assets/logo.png';
import { useLocation } from "react-router-dom";
import  './Header.css'

export default function Header() {

  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const location = useLocation();

    useEffect(() => {
    dispatch(searchProduct(searchData));
  }, [dispatch, searchData]);

  const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
  <div className="container-fluid">
      <Link to="/" className="navbar-brand"><img alt="My Cart" width="150px" height="40px" src={ logo} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className={splitLocation[1] === "" ? "nav-item active" : ""}>
          <Link  className="nav-link" to="/" aria-current="page" >Home</Link>
        </li>
        <li className={splitLocation[1] === "listProduct" ? "nav-item active" : ""} >
          <Link className="nav-link"  to="/listProduct">Product List</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control"
        type="search"
        placeholder="Search Product"
        aria-label="Search"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
          />
      </form>
    </div>
  </div>
</nav>
</div>
      )
}