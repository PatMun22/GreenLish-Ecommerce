import BlogLeft from "../blogLeft/BlogLeft";
import BlogRight from "../blogRight/BlogRight";
import "./blogPosts.scss";

const BlogPosts = () => {
  return (
    <div className="blog-posts-container">
      <BlogRight />
      <BlogLeft />
    </div>
  );
};

export default BlogPosts;
