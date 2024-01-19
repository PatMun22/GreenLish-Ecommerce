import BlogRight from "../blogRight/BlogRight";
import ShopLeft from "../shopLeft/ShopLeft";
// import ShopLeft from "../shopLeft/ShopLeft";
import "./blogPosts.scss";

const BlogPosts = () => {
  return (
    <div className="blog-posts-container">
      <BlogRight />
      <ShopLeft />
    </div>
  );
};

export default BlogPosts;
