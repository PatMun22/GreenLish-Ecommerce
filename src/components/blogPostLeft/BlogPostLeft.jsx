import BlogComments from "../blogComments/BlogComments";
import PostSocials from "../postSocials/PostSocials";
import BlogSocialsContainer from "../blogSocialsContainer/BlogSocialsContainer";
import BlogText from "../blogText/BlogText";
import "./blogPostLeft.scss";
import RelatedArticles from "../relatedArticles/RelatedArticles";
import ArticleAuthor from "../articleAuthor/ArticleAuthor";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const BlogPostLeft = () => {
  const { blog } = useContext(ShopContext);
  return (
    <div className="blog-post-left">
      <div className="date-comment">
        <div className="author">By {blog.author}</div>
        <div className="vert-line"></div>
        <div className="date"> {blog.date}</div>
        <div className="vert-line"></div>
        <div className="comments">{blog.comments} Comments</div>
      </div>
      <PostSocials />
      <BlogText />
      <BlogSocialsContainer />
      <ArticleAuthor />
      <RelatedArticles />
      <BlogComments />
    </div>
  );
};

export default BlogPostLeft;
