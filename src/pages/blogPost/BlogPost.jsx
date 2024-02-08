import BlogPostBottom from "../../components/blogPostBottom/BlogPostBottom";
import BlogPostTop from "../../components/blogPostTop/BlogPostTop";
import "./blogPost.scss";

const BlogPost = () => {
  return (
    <div className="blog-post">
      <BlogPostTop />
      <BlogPostBottom />
    </div>
  );
};

export default BlogPost;
