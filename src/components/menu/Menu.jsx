/* eslint-disable react/prop-types */
import "./menu.scss";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AllCategories } from "../../assets/data";
import { Link } from "react-router-dom";

const Menu = ({ handleCloseList, isOpen }) => {
  return (
    <div className="menuContainer">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => handleCloseList()}
        >
          <FiMenu />
          All Categories
          <IoIosArrowDown />
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <h4>All Categories</h4>
            {AllCategories.map((category) => (
              <li className="dropdown-list" key={`category ${category.id}`}>
                <Link className="dropdown-item" to={`/category ${category.id}`}>
                  {category.category}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
