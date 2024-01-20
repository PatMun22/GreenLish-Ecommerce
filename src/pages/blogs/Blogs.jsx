import "./blogs.scss";
import BlogPosts from "../../components/blogPosts/BlogPosts";
import BlogPagination from "../../components/blogPagination/BlogPagination";

const Blogs = () => {
  return (
    <div className="blogs">
      <BlogPosts />
      <BlogPagination />
    </div>
  );
};

export default Blogs;
