/* eslint-disable react/prop-types */
import "./productCategory.scss";
import ProductItem from "../productItem/ProductItem";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductCategory = () => {
  const { items } = useContext(ShopContext);
  return (
    <div className="product_category">
      {items.slice(0, 12).map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductCategory;
