/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./pagination.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, pageNumbers } = useContext(ShopContext);

  return (
    <nav>
      <ul>
        {pageNumbers.map((page) => (
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

export default Pagination;
