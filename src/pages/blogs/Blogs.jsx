import "./blogs.scss";
import BlogPosts from "../../components/blogPosts/BlogPosts";
import BlogPagination from "../../components/blogPagination/BlogPagination";
import ShopButtons from "../../components/shopButtons/ShopButtons";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Blogs = () => {
  const { blogGridViewPath, blogUnitViewPath } = useContext(ShopContext);
  return (
    <div className="blogs">
      <ShopButtons grid_path={blogGridViewPath} unit_path={blogUnitViewPath} />
      <BlogPosts />
      <BlogPagination />
    </div>
  );
};

export default Blogs;
