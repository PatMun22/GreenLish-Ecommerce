/* eslint-disable react/prop-types */
import "./shopRight.scss";
import ShopProductItem from "../shopProductItem/ShopProductItem";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ShopRight = () => {
  const { currentItems } = useContext(ShopContext);
  return (
    <div className="shop-right">
      {currentItems.map((item) => (
        <ShopProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShopRight;
