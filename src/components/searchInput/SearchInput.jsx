/* eslint-disable react/prop-types */
import "./searchInput.scss";
import { BiSearch } from "react-icons/bi";

const SearchInput = ({ value, setValue }) => {
  return (
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
  );
};

export default SearchInput;
