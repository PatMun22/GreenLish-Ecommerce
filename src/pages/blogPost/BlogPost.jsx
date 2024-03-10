import BlogPostBottom from "../../components/blogPostBottom/BlogPostBottom";
import BlogPostTop from "../../components/blogPostTop/BlogPostTop";
import "./blogPost.scss";

const BlogPost = () => {
  window.scrollTo(0, 0);
  return (
    <div className="blog-post">
      <BlogPostTop />
      <BlogPostBottom />
    </div>
  );
};

export default BlogPost;
