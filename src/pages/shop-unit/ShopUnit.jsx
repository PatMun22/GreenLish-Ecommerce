import UnitPagination from "../../components/unitPagination/UnitPagination";
import ShopButtons from "../../components/shopButtons/ShopButtons";
import ShopUnitProducts from "../../components/shopUnitProducts/ShopUnitProducts";
import "./shopUnit.scss";

const ShopUnit = () => {
  return (
    <div className="shop-unit">
      <ShopButtons />
      <ShopUnitProducts />
      <UnitPagination />
    </div>
  );
};

export default ShopUnit;
