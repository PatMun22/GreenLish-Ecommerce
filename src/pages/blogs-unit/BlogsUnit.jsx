import BlogPagination from "../../components/blogPagination/BlogPagination";
import BlogUnitPosts from "../../components/blogUnitPosts/BlogUnitPosts";
import "./blogsUnit.scss";

const BlogsUnit = () => {
  return (
    <div className="blogs-unit">
      <BlogUnitPosts />
      <BlogPagination />
    </div>
  );
};

export default BlogsUnit;
