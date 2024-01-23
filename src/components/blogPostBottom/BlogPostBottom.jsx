import BlogLeft from "../blogLeft/BlogLeft";
import BlogPostLeft from "../blogPostLeft/BlogPostLeft";
import "./blogPostBottom.scss";

const BlogPostBottom = () => {
  return (
    <div className="blog-post-bottom">
      <BlogPostLeft />
      <BlogLeft />
    </div>
  );
};

export default BlogPostBottom;
