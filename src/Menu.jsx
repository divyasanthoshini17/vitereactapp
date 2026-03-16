import React from "react"
import Recipe from "./Recipe";

function Menu() {
    return (
        <section className="menu">

            <h2>Our Popular Dishes</h2>

            <div className="food-container">

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"/>
                    <h3>Pizza</h3>
                    <p>$12</p>
                </div>

                <div className="card">
                    <img src="https://images.unsplash.com/photo-1550547660-d9450f859349"/>
                    <h3>Burger</h3>
                    <p>$8</p>
                </div>

                <div className ="card">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"/>
                    <h3>Salad</h3>
                    <p>$7</p>
                </div>

                <Recipe/>
            </div>
                
        </section>
        

    )
}

export default Menu;