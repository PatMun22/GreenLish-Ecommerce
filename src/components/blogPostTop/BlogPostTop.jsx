import { useContext } from "react";
import "./blogPostTop.scss";
import { ShopContext } from "../../context/ShopContext";

const BlogPostTop = () => {
  const { blog } = useContext(ShopContext);

  return (
    <div className="blog-post-top">
      <img src={blog.image} alt={`blog post ${blog.id} image`} loading="lazy" />
      <div className="heading-date">
        <h1>{blog.title}</h1>
      </div>
    </div>
  );
};

export default BlogPostTop;
