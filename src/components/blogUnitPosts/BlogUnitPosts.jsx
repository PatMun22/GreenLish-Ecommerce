import BlogLeft from "../blogLeft/BlogLeft";
import BlogUnitRight from "../blogUnitRight/BlogUnitRight";
import "./blogUnitPosts.scss";

const BlogUnitPosts = () => {
  return (
    <div className="blog-unit-posts">
      <BlogUnitRight />
      <BlogLeft />
    </div>
  );
};

export default BlogUnitPosts;
