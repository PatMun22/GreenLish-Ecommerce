import { useContext } from "react";
import "./shopUnitRight.scss";
import { ShopContext } from "../../context/ShopContext";
import ShopUnitProductItem from "../ShopUnitProductItem/ShopUnitProductItem";

const ShopUnitRight = () => {
  const { unitCurrentItems } = useContext(ShopContext);
  return (
    <div className="unit-shop-right">
      {unitCurrentItems.map((item) => (
        <ShopUnitProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShopUnitRight;
