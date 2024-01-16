/* eslint-disable react/no-unknown-property */
import "./search.scss";

import { useState } from "react";
import { recommendedProducts } from "../../assets/data";
import Menu from "../menu/Menu";
import SearchInput from "../searchInput/SearchInput";
import { SearchDropdown } from "../searchDropdown/SearchDropdown";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleOpenList = () => {
    setIsOpen(true);
  };

  const handleCloseList = () => {
    setIsOpen(false);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  return (
    <div className="menu_searchbox">
      <Menu
        handleOpenList={handleOpenList}
        handleCloseList={handleCloseList}
        isOpen={isOpen}
      />
      <SearchInput value={value} setValue={setValue} />
      <SearchDropdown
        recommendedProducts={recommendedProducts}
        value={value}
        onSearch={onSearch}
      />
    </div>
  );
};

export default Search;
