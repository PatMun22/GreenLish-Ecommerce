import { useContext } from "react";
import Pagination from "../../components/pagination/Pagination";
import ShopButtons from "../../components/shopButtons/ShopButtons";
import ShopProducts from "../../components/shopProducts/ShopProducts";
import "./shop.scss";
import { ShopContext } from "../../context/ShopContext";

const Shop = () => {
  const { productGridViewPath, productUnitViewPath } = useContext(ShopContext);

  return (
    <div className="shop">
      <ShopButtons
        grid_path={productGridViewPath}
        unit_path={productUnitViewPath}
      />
      <ShopProducts />
      <Pagination />
    </div>
  );
};

export default Shop;
