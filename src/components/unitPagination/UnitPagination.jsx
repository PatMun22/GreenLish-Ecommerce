import { Link } from "react-router-dom";
import "./unitPagination.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const UnitPagination = () => {
  const { currentPage, setCurrentPage, unitPageNumbers } =
    useContext(ShopContext);

  return (
    <nav>
      <ul>
        {unitPageNumbers.map((page) => (
          <Link
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`page-link ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default UnitPagination;
