import { useContext } from "react";
import "./blogs.scss";
import { ShopContext } from "../../context/ShopContext";
import BlogPosts from "../../components/blogPosts/BlogPosts";
import BlogPagination from "../../components/blogPagination/BlogPagination";

const Blogs = () => {
  const { currentItems } = useContext(ShopContext);
  return (
    <div className="blogs">
      <BlogPosts currentItems={currentItems} />
      <BlogPagination />
    </div>
  );
};

export default Blogs;
