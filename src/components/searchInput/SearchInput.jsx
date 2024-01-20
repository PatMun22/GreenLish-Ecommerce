/* eslint-disable react/prop-types */
import "./searchInput.scss";
import { BiSearch } from "react-icons/bi";

const SearchInput = ({ value, setValue }) => {
  return (
    <form className="site-search">
      <input
        type="text"
        placeholder="Search your products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="site-search-btn">
        Search <BiSearch />
      </button>
    </form>
  );
};

export default SearchInput;
