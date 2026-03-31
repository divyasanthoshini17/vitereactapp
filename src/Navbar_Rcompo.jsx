import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbarc({cartcount}){
    return(
    <div className="navbar">
        <div className="left-nav">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
                className="burger"/>

            <h1 id="logo">
                <span className="diva">Diva</span><span className="cart">Cart</span>
            </h1>
        </div>
        <div className="serch_box">
          <input type="text" className="search" placeholder="Search..." />
        </div>
        <div className="nav-items">
            <ul className="nav-ul">
                <li>Home</li>
                <li>Contact Us</li>
                 <li>
                    <i class="bi bi-heart"></i>
                    <span id="wishlistCount">0</span>
                </li>
                <li >
                    <Link to="/cart">
                        <i class="bi bi-cart4"></i>
                        <span id="cartCount">{cartcount}</span>
                    </Link>
                </li> 
            </ul>
        </div>
    </div>
    )
}

export default Navbarc;