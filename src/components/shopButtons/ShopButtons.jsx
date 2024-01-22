/* eslint-disable react/prop-types */
import { IoGridOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdGridOff } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import "./shopButtons.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ShopButtons = ({ grid_path, unit_path }) => {
  const { activeBtn, setActiveBtn } = useContext(ShopContext);

  return (
    <div className="shop-buttons">
      <div className="buttons-container">
        <Link
          to={grid_path}
          className={`btn ${activeBtn === "grid view" ? "active" : ""}`}
          onClick={() => setActiveBtn("grid view")}
        >
          <IoGridOutline />
          Grid View
        </Link>
        <Link
          to={unit_path}
          className={`btn ${activeBtn === "unit view" ? "active" : ""}`}
          onClick={() => setActiveBtn("unit view")}
        >
          <TfiMenuAlt />
          Unit View
        </Link>
        <button
          className={activeBtn === "select" ? "active" : ""}
          onClick={() => setActiveBtn("select")}
        >
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
