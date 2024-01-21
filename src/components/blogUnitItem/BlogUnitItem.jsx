/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./blogUnitItem.scss";

const BlogUnitItem = ({ blog }) => {
  return (
    <div className="blog-unit-item">
      <Link to={`/blogs/${blog.id}`} className="blog-unit-image">
        <img src={blog.image} alt={`blog post ${blog.id}`} />
      </Link>
      <div className="blog-unit-details">
        <p className="top-para">enjoy our blogs</p>
        <h1>{blog.title}</h1>
        <div className="unit-date-comment">
          <div className="unit-date">{blog.date}</div>
          <div className="unit-vert-line"></div>
          <div className="unit-comment">{blog.comments} Comments</div>
          <div className="unit-vert-line"></div>
          <div className="unit-category">{blog.cartegory}</div>
        </div>
        <p>{blog.description}</p>
        <Link to={`/blogs/${blog.id}`} className="unit-blog-link">
          continue reading <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogUnitItem;
