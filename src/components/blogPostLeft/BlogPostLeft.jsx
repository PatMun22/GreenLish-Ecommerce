import BlogComments from "../blogComments/BlogComments";
import PostSocials from "../postSocials/PostSocials";
import BlogSocialsContainer from "../blogSocialsContainer/BlogSocialsContainer";
import BlogText from "../blogText/BlogText";
import "./blogPostLeft.scss";

const BlogPostLeft = () => {
  return (
    <div className="blog-post-left">
      <div className="date-comment">
        <div className="author">By Austin Auriellas</div>
        <div className="vert-line"></div>
        <div className="date"> Nov 21, 2023</div>
        <div className="vert-line"></div>
        <div className="comments">14 Comments</div>
      </div>
      <PostSocials />
      <BlogText />
      <BlogSocialsContainer />
      <BlogComments />
    </div>
  );
};

export default BlogPostLeft;
