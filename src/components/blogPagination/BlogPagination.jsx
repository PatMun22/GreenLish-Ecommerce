import { Link } from "react-router-dom";
import "./blogPagination.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const BlogPagination = () => {
  const { currentPage, setCurrentPage, blogPageNumbers } =
    useContext(ShopContext);

  return (
    <nav>
      <ul>
        {blogPageNumbers.map((page) => (
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

export default BlogPagination;
