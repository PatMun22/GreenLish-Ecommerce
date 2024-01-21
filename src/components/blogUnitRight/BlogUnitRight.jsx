import { useContext } from "react";
import "./blogUnitRight.scss";
import { ShopContext } from "../../context/ShopContext";
import BlogUnitItem from "../blogUnitItem/BlogUnitItem";

const BlogUnitRight = () => {
  const { currentBlogItems } = useContext(ShopContext);
  return (
    <div className="blog-unit-right">
      {currentBlogItems.map((blog) => (
        <BlogUnitItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogUnitRight;
