import { useOutletContext } from "react-router-dom";
import Cart from "./Cart";

function CartWrapper() {
  const { cartItems, removeFromCart,increaseQty, decreaseQty } = useOutletContext();

  return <Cart cartItems={cartItems} removeFromCart={removeFromCart}  increaseQty={increaseQty}    decreaseQty={decreaseQty}/>;
}

export default CartWrapper;