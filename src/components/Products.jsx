import React from "react";
import products from "../api/products.json";
import "./Products.css";

const Products = ({ setCartItems, cartItems }) => {
  const clickHandler = (product) => {
    let updatedCartItems = [...cartItems];
    let isFound = false;
    for (let i = 0; i < updatedCartItems.length; i++) {
      if (product.id === updatedCartItems[i].id) {
        updatedCartItems[i].count = updatedCartItems[i].count + 1;
        isFound = true;
      }
    }
    if (!isFound) {
      updatedCartItems = [...updatedCartItems, { ...product, count: 1 }];
    }
    setCartItems(updatedCartItems);
  };

  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div>{product.name}</div>
            <div>${product.pricePerMonth}</div>
            <button onClick={() => clickHandler(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
