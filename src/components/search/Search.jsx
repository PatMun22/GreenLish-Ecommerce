import "./search.scss";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  return (
    <div className="menu_searchbox">
      <div className="menuContainer">
        <FiMenu />
        <h2>All Categories</h2>
        <IoIosArrowDown />
      </div>
      <form>
        <input type="text" placeholder="search your products..." />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
