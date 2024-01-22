import { useContext } from "react";
import BlogPagination from "../../components/blogPagination/BlogPagination";
import BlogUnitPosts from "../../components/blogUnitPosts/BlogUnitPosts";
import ShopButtons from "../../components/shopButtons/ShopButtons";
import "./blogsUnit.scss";
import { ShopContext } from "../../context/ShopContext";

const BlogsUnit = () => {
  const { blogGridViewPath, blogUnitViewPath } = useContext(ShopContext);
  return (
    <div className="blogs-unit">
      <ShopButtons grid_path={blogGridViewPath} unit_path={blogUnitViewPath} />
      <BlogUnitPosts />
      <BlogPagination />
    </div>
  );
};

export default BlogsUnit;
