/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./blogUnitItem.scss";

const BlogUnitItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <Link to={`/blogs/${blog.id}`} className="blog-item">
        <img src={blog.image} alt={`blog post ${blog.id}`} />
      </Link>
      <div className="blog-unit-details">
        <div className="date-comment">
          <div className="date">{blog.date}</div>
          <div className="vert-line"></div>
          <div className="comment">{blog.comments} Comments</div>
          <div className="vert-line"></div>
          <div className="category">{blog.cartegory}</div>
        </div>
        <h3>{blog.description}</h3>
        <Link to={`/bog/${blog.id}`} className="blog-link">
          <p>
            continue reading <IoIosArrowRoundForward />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogUnitItem;
