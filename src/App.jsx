 import React from "react";
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

function App() {
  return (
    <CartProvider>
      <div style={{ padding: "12px" }}>
        <h1>Products</h1>
        <ProductList />

        <CartSummary />
      </div>
    </CartProvider>
  );
}

export default App;
