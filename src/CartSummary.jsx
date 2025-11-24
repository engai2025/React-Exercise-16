import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartSummary = () => {
  const { cartItems, removeItem, totalItems  } = useContext(CartContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Cart Summary</h2>
      <div>Total Items: {totalItems}</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}{" "}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

     
 
    </div>
  );
};

export default CartSummary;
