import React from "react";

function Cart({cartItems,removeFromCart, increaseQty, decreaseQty}){

    const total = cartItems.reduce((sum, item) => {
        return sum + item.product.price * item.qty;
    }, 0);

    return(
        <div>
            <h1>🛒 Your Cart</h1>

                {cartItems.length === 0 ? (<h2>Cart is empty</h2>): (
                    cartItems.map((item, index) => {
                        return (
                            <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                            
                                <img src={item.product.thumbnail} width="100" />

                                <h3>{item.product.title}</h3>
                                <p>${item.product.price}</p>

                                 <div>
                                    <button onClick={() => decreaseQty(item.product.id)}>-</button>
                                    <span> {item.qty} </span>
                                    <button onClick={() => increaseQty(item.product.id)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(index)}>
                                    Remove
                                </button>

                            </div>

                        );

                    })
                    
                    
                )}
                        <h2>Total: ${total}</h2>
                
        </div>
    )
}

export default Cart;