import { useParams } from "react-router-dom";
import BlogPostBottom from "../../components/blogPostBottom/BlogPostBottom";
import BlogPostTop from "../../components/blogPostTop/BlogPostTop";
import "./blogPost.scss";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams;

  useEffect(() => {
    if (!id) {
      return;
    } else {
    }
  }, [id]);

  return (
    <div className="blog-post">
      <BlogPostTop />
      <BlogPostBottom />
    </div>
  );
};

export default BlogPost;
