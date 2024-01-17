import { useContext } from "react";
import "./shopRight.scss";
import { ShopContext } from "../../context/ShopContext";
import ShopProductItem from "../shopProductItem/ShopProductItem";

const ShopRight = () => {
  const { items } = useContext(ShopContext);
  return (
    <div className="shop-right">
      {items.map((item) => (
        <ShopProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShopRight;
