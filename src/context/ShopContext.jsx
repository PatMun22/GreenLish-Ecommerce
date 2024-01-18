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
  const [wishListItems, setWishListItems] = useState(getDefaultCart());
  const [color, setColor] = useState("");
  const [items, setItems] = useState(recommendedProducts);
  const [activeButton, setActiveButton] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering products according to cartegory

  const filterItems = (catItem) => {
    const filtered = recommendedProducts.filter(
      (currItem) => currItem.category.toLowerCase() === catItem.toLowerCase()
    );

    setItems(filtered);
  };

  // product-page buttons

  const handleButtonClick = (filter) => {
    setActiveButton(filter);
    switch (filter) {
      case "All":
        setItems(recommendedProducts);
        break;
      case "Recommended":
        filterItems("Recommended");
        break;
      case "Popular":
        filterItems("Popular");
        break;
      case "Most Popular":
        filterItems("Most Popular");
        break;
      case "New Arrival":
        filterItems("New Arrival");
        break;
      default:
        break;
    }
  };

  // adding/removing items to cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let prodInfo = recommendedProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * prodInfo.price;
      }
    }

    return totalAmount;
  };

  const getTotalDiscountAmount = () => {
    let totalDiscountAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let prodInfo = recommendedProducts.find(
          (product) => product.id === Number(item)
        );
        totalDiscountAmount += cartItems[item] * prodInfo.discount;
      }
    }

    return totalDiscountAmount;
  };

  const getTotalShippingAmount = () => {
    let totalShippingAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let prodInfo = recommendedProducts.find(
          (product) => product.id === Number(item)
        );
        totalShippingAmount += cartItems[item] * prodInfo.shipping;
      }
    }

    return totalShippingAmount;
  };

  const deleteCartItem = () => {
    let newCartItems;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let prodInf = recommendedProducts.find(
          (product) => product.id === Number(item)
        );

        newCartItems = cartItems.filter((item) => item.id !== prodInf.id);
      }
    }

    return newCartItems;
  };

  const getNumberOfCartItems = () => {
    let numberOfCartItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        numberOfCartItems += 1;
      }
    }

    return numberOfCartItems;
  };

  const getNumberOfWishListItems = () => {
    let numberOfWishListItems = 0;
    for (const item in wishListItems) {
      if (wishListItems[item] > 0) {
        numberOfWishListItems += 1;
      }
    }

    return numberOfWishListItems;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // changing color of the favorite products Icon

  const onBgChange = () => {
    setColor("green");
  };

  // Pagination code

  const itemsPerPage = 12;

  const totalItems = items.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // get current items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    filterItems,
    items,
    color,
    onBgChange,
    updateCartItemCount,
    deleteCartItem,
    getTotalCartAmount,
    getTotalDiscountAmount,
    getTotalShippingAmount,
    getNumberOfCartItems,
    getNumberOfWishListItems,
    handleButtonClick,
    activeButton,
    currentItems,
    totalItems,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    pageNumbers,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
