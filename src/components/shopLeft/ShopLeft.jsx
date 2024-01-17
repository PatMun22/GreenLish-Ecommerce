import CategoriesBox from "../categoriesBox/CategoriesBox";
import Cook from "../cook/Cook";
import FilterBox from "../filterBox/FilterBox";
import TopRated from "../topRated/TopRated";
import "./shopLeft.scss";

const ShopLeft = () => {
  return (
    <div className="shop-left">
      <div className="left-box box1">
        <FilterBox />
      </div>
      <div className="left-box box2">
        <CategoriesBox />
      </div>
      <div className="left-box box3">
        <TopRated />
      </div>
      <div className="left-box box4">
        <Cook />
      </div>
    </div>
  );
};

export default ShopLeft;
