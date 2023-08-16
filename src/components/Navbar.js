import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../store/cartSlice";
const Navbar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/cart">Cart({cart.length})</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/order">Orders</Link>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
