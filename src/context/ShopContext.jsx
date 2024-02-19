/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import {
  blogs,
  commentSocials,
  recommendedProducts,
  services,
  singleProducts,
} from "../assets/data";
import { useParams } from "react-router-dom";

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
  const [activeBtn, setActiveBtn] = useState("grid view");
  const [blogItems, setBlogItems] = useState(blogs);
  const [isHovering, setIsHovering] = useState(
    Array(commentSocials.length).fill(false)
  );
  const [currentView, setCurrentView] = useState("description");
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [cardData, setCardData] = useState({
    cardFullName: "",
    cardNumber: "",
    expiryDate: "",
    codeCvv: "",
    cardEmail: "",
  });
  const [cardErrors, setCardErrors] = useState({});
  const [billingData, setBillingData] = useState({
    billingFirstName: "",
    billingLastName: "",
    billingEmail: "",
    billingPhone: "",
    billingAddress: "",
    billingApartment: "",
    billingCity: "",
    billingCountry: "",
    billingPostCode: "",
  });
  const [billingErrors, setBillingErrors] = useState({});

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

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Implementing Wish List functionality

  const getNumberOfWishListItems = () => {
    let numberOfWishListItems = 0;
    for (const item in wishListItems) {
      if (wishListItems[item] > 0) {
        numberOfWishListItems += 1;
      }
    }

    return numberOfWishListItems;
  };

  const addToWishList = (itemId) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromWishList = (itemId) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // changing color of the favorite products Icon

  const onBgChange = () => {
    setColor("green");
  };

  // Pagination code

  const itemsPerPage = 12;
  const unitItemsPerPage = 6;
  const blogItemsPerPage = 6;

  const totalItems = items.length;
  const totalBlogItems = blogItems.length;

  const pageNumbers = [];
  const unitPageNumbers = [];
  const blogPageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  for (let i = 1; i <= Math.ceil(totalItems / unitItemsPerPage); i++) {
    unitPageNumbers.push(i);
  }

  for (let i = 1; i <= Math.ceil(totalBlogItems / blogItemsPerPage); i++) {
    blogPageNumbers.push(i);
  }

  // get current items per page in product grid view

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // get current items per page in product unit view

  const indexOfLastUnitItem = currentPage * unitItemsPerPage;
  const indexOfFirstUnitItem = indexOfLastUnitItem - unitItemsPerPage;
  const unitCurrentItems = items.slice(
    indexOfFirstUnitItem,
    indexOfLastUnitItem
  );

  // get current items per page in blog grid and unit view

  const indexOfLastBlogItem = currentPage * blogItemsPerPage;
  const indexOfFirstBlogItem = indexOfLastBlogItem - blogItemsPerPage;
  const currentBlogItems = blogItems.slice(
    indexOfFirstBlogItem,
    indexOfLastBlogItem
  );

  // dynamic link paths to products and blog posts grid and unit view pages

  const productGridViewPath = "/shop";
  const productUnitViewPath = "/shop/unit";
  const blogGridViewPath = "/blogs";
  const blogUnitViewPath = "/blogs/unit";

  // Setting color of the article author social icons dynamically

  const handleMouseEnter = (index) => {
    setIsHovering((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovering((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  const calculateTimeDifference = (date_info) => {
    const current_date = new Date();
    const end_date = new Date(date_info);

    const timeDifferInMilliSec = Math.abs(end_date - current_date);

    const days = Math.floor(timeDifferInMilliSec / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifferInMilliSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifferInMilliSec % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifferInMilliSec % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // getting single page ids from usePaarams hook

  const { id } = useParams();

  //Product single pages

  const product_id = parseInt(id);

  const product = singleProducts.find((item) => item.id === product_id);

  //Service single pages

  const service_id = parseInt(id);

  const service = services.find((service) => service.id === service_id);
  //Blogs single pages

  const blog_id = parseInt(id);

  const blog = blogs.find((blog) => blog.id === blog_id);

  // Login and LogUp input form validation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required";
    }

    if (!formData.userName.trim()) {
      validationErrors.userName = "User name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }

    if (formData.confirmPassword.trim() !== formData.password.trim()) {
      validationErrors.confirmPassword = "Password does not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  const inputStyle = { color: "red", fontSize: "12px" };

  // Payment Card Information Input Form Validation

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleCardInfoSubmit = (e) => {
    e.preventDefault();

    const cardInforValidationErrors = {};

    if (!cardData.cardFullName.trim()) {
      cardInforValidationErrors.cardFullName = "Full name required";
    } else if (cardData.cardFullName.trim().length < 2) {
      cardInforValidationErrors.cardFullName = "Enter at least two names";
    }

    if (!cardData.cardNumber.trim()) {
      cardInforValidationErrors.cardNumber = "Card number required";
    } else if (!/^(?:\d[ -]*?){13,16}$/.test(cardData.cardNumber)) {
      cardInforValidationErrors.cardNumber = "Enter a valid card number";
    }

    if (!cardData.expiryDate.trim()) {
      cardInforValidationErrors.expiryDate = "Expiry date required";
    } else if (!/\d{1,2}\/\d{1,2}\/\d{2,4}/.test(cardData.expiryDate)) {
      cardInforValidationErrors.cardExpiry = "Invalid expiry date format";
    }

    if (!cardData.codeCvv.trim()) {
      cardInforValidationErrors.codeCvv = "Code CVV required";
    } else if (!/^[0-9]{3, 4}$/.test(cardData.codeCvv)) {
      cardInforValidationErrors.codeCvv = "Invalid code CVV";
    }

    if (!cardData.cardEmail.trim()) {
      cardInforValidationErrors.cardEmail = "Card email required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(cardData.cardEmail)
    ) {
      cardInforValidationErrors.cardEmail = "Invalid email address";
    }

    setCardErrors(cardInforValidationErrors);
  };

  // Billing Card Input Form Validation

  const handleBillingCardChange = (e) => {
    const { name, value } = e.target;
    setBillingData({ ...billingData, [name]: value });
  };

  const handleBillingFormSubmit = (e) => {
    e.preventDefault();

    const billingFormValidationErrors = {};

    if (!billingData.billingFirstName.trim()) {
      billingFormValidationErrors.billingFirstName = "First name required";
    }

    if (!billingData.billingLastName.trim()) {
      billingFormValidationErrors.billingLastName = "Last name required";
    }

    if (!billingData.billingEmail.trim()) {
      billingFormValidationErrors.billingEmail = "Email required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        billingData.billingEmail
      )
    ) {
      billingFormValidationErrors.billingEmail = "Invalid email";
    }

    if (!billingData.billingPhone.trim()) {
      billingFormValidationErrors.billingPhone = "Phone required";
    } else if (
      !/r"^(\\+254|0)([7][0-9]|[1][0-1]){1}[0-9]{1}[0-9]{6}$"/.test(
        billingData.billingPhone
      )
    ) {
      billingFormValidationErrors.billingPhone = "Invalid phone number";
    }

    if (!billingData.billingAddress.trim()) {
      billingFormValidationErrors.billingAddress = "Address required";
    }

    if (!billingData.billingCity.trim()) {
      billingFormValidationErrors.billingCity = "City required";
    }

    if (!billingData.billingCountry.trim()) {
      billingFormValidationErrors.billingCountry = "Country required";
    }

    if (!billingData.billingPostCode.trim()) {
      billingFormValidationErrors.billingPostCode =
        "Postcode or Zip code required";
    }

    setBillingErrors(billingFormValidationErrors);
  };

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
    pageNumbers,
    unitCurrentItems,
    unitPageNumbers,
    activeBtn,
    setActiveBtn,
    currentBlogItems,
    blogItems,
    blogPageNumbers,
    blogs,
    productGridViewPath,
    productUnitViewPath,
    blogGridViewPath,
    blogUnitViewPath,
    isHovering,
    handleMouseEnter,
    handleMouseLeave,
    calculateTimeDifference,
    product,
    currentView,
    setCurrentView,
    service,
    blog,
    addToWishList,
    removeFromWishList,
    errors,
    handleChange,
    handleSubmit,
    formData,
    inputStyle,
    handleCardChange,
    handleCardInfoSubmit,
    cardErrors,
    billingErrors,
    handleBillingCardChange,
    handleBillingFormSubmit,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
