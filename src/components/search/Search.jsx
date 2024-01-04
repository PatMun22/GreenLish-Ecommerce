import "./search.scss";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AllCategories } from "../../assets/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { recommendedProducts } from "../../assets/data";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleCloseList = () => {
    setIsOpen(!isOpen);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  return (
    <div className="menu_searchbox">
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
                  <Link
                    className="dropdown-item"
                    to={`/category ${category.id}`}
                  >
                    {category.category}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search your products..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
      <div className="search-dropdown">
        {recommendedProducts
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const title = item.title.toLowerCase();

            return (
              searchTerm && title.includes(searchTerm) && searchTerm !== title
            );
          })
          .slice(0, 5)
          .map((item) => (
            <div
              onClick={() => onSearch(item.title)}
              className="product-item"
              key={`item ${item.id}`}
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
