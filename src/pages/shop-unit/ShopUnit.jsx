import ShopButtons from "../../components/shopButtons/ShopButtons";
import ShopProducts from "../../components/shopProducts/ShopProducts";
import "./shopUnit.scss";

const ShopUnit = () => {
  return (
    <div className="shop-unit">
      <ShopButtons />
      <ShopProducts />
    </div>
  );
};

export default ShopUnit;
