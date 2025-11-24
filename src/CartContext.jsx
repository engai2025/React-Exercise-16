import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
 
    setCartItems((prev) => [...prev, product]);
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
