import ShopLeft from "../shopLeft/ShopLeft";
import ShopRight from "../shopRight/ShopRight";
import "./shopProducts.scss";

const ShopProducts = () => {
  return (
    <div className="shop-product-container">
      <ShopLeft />
      <ShopRight />
    </div>
  );
};

export default ShopProducts;
