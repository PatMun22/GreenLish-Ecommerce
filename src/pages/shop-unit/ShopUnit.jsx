/* eslint-disable no-undef */
import UnitPagination from "../../components/unitPagination/UnitPagination";
import ShopButtons from "../../components/shopButtons/ShopButtons";
import ShopUnitProducts from "../../components/shopUnitProducts/ShopUnitProducts";
import "./shopUnit.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ShopUnit = () => {
  const { productGridViewPath, productUnitViewPath } = useContext(ShopContext);
  return (
    <div className="shop-unit">
      <ShopButtons
        grid_path={productGridViewPath}
        unit_path={productUnitViewPath}
      />
      <ShopUnitProducts />
      <UnitPagination />
    </div>
  );
};

export default ShopUnit;
