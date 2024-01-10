/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { recommendedProducts } from "../assets/data";

export const ShopContext = createContext(null);

// initial cart context

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < recommendedProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [color, setColor] = useState("");
  const [items, setItems] = useState(recommendedProducts);

  // adding/removing items to cart

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Filtering products according to cartegory

  const filterItems = (catItem) => {
    const filtered = recommendedProducts.filter(
      (currItem) => currItem.category.toLowerCase() === catItem.toLowerCase()
    );

    setItems(filtered);
  };

  // changing color of the favorite products Icon

  const onBgChange = () => {
    setColor("green");
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    filterItems,
    items,
    color,
    onBgChange,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
