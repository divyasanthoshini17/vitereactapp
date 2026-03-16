import React from "react"

function Navbar() {
    return (            
        <nav className="navbar">

            <div className="logo">
                🍔 Foodies
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button className="order-btn">
                Order Now
            </button>

        </nav>
    )
}

export default Navbar;