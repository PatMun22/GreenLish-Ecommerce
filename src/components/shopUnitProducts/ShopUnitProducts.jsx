import ShopLeft from "../shopLeft/ShopLeft";
import ShopUnitRight from "../shopUnitRight/ShopUnitRight";
import "./shopUnitProducts.scss";

const ShopUnitProducts = () => {
  return (
    <div className="shop-unit-product-container">
      <ShopLeft />
      <ShopUnitRight />
    </div>
  );
};

export default ShopUnitProducts;
