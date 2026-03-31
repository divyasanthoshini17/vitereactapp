import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbarc from "./Navbar_Rcompo";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ➕ Add to cart
  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.product.id === product.id);

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, qty: 1 }]);
    }
  };

  // ❌ Remove
  const removeFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  // ➕ Increase
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ Decrease
  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.product.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <>
      <Navbarc
        cartcount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
      />

      <Outlet
        context={{
          cartItems,
          addToCart,
          removeFromCart,
          increaseQty,
          decreaseQty,
        }}
      />
    </>
  );
}

export default App;