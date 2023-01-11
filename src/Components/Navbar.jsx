import React from "react";
import "../Styles/Navbar.css";
import "../Icon/cart.jpg";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <div>
            <img src="cart.jpg" />
          </div>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
