import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import products from "./products";

const ProductList = () => {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "18px" }}>
          <div>{p.name}</div>
          <div>Price: ${p.price.toFixed(2)}</div>
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
