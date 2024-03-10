/* eslint-disable react/prop-types */

import "./singleProduct.scss";
import ProductSummary from "../productSummary/ProductSummary";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import ProductDetailCategorisation from "../productDetailCategorisation/ProductDetailCategorisation";

const SingleProduct = () => {
  window.scrollTo(0, 0);
  const { product } = useContext(ShopContext);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="singleProduct-container">
      <ProductSummary />
      <ProductDetailCategorisation />
    </div>
  );
};

export default SingleProduct;
