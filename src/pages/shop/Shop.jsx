import ShopButtons from "../../components/shopButtons/ShopButtons";
import ShopProducts from "../../components/shopProducts/ShopProducts";
import "./shop.scss";

const Shop = () => {
  return (
    <div className="shop">
      <ShopButtons />
      <ShopProducts />
    </div>
  );
};

export default Shop;
