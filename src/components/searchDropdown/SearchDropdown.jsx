/* eslint-disable react/prop-types */
import "./searchDropdown.scss";

export const SearchDropdown = ({ recommendedProducts, value }) => {
  return (
    <div className={`search-dropdown ${!open ? "visible" : ""}`}>
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
          <div className="product-item" key={`item ${item.id}`}>
            {item.title}
          </div>
        ))}
    </div>
  );
};
