import "./blogRight.scss";
import BlogItem from "../blogItem/BlogItem";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const BlogRight = () => {
  const { currentBlogItems } = useContext(ShopContext);
  return (
    <div className="blog-right">
      {currentBlogItems.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogRight;
