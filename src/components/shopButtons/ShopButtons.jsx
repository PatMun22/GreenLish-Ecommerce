import { IoGridOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdGridOff } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import "./shopButtons.scss";

const ShopButtons = () => {
  return (
    <div className="shop-buttons">
      <div className="buttons-container">
        <button>
          <IoGridOutline />
          Grid View
        </button>
        <button>
          <TfiMenuAlt />
          Unit View
        </button>
        <button>
          <MdGridOff />
          <select name="" id="">
            <option value="0">Select Period</option>
            <option value="1">Today</option>
            <option value="2">This Week</option>
            <option value="3">This Month</option>
            <option value="4">This Year</option>
          </select>
        </button>
        <div className="form">
          <input type="text" placeholder="Search products here..." />
          <button type="submit" className="shop-search-btn">
            Search <CiSearch className="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopButtons;
