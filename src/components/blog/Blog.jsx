import "./blog.scss";
import BlogItem from "../blogItem/BlogItem";
import { blogs } from "../../assets/data";

const Blog = () => {
  return (
    <div className="blog">
      <h3>Blog</h3>
      <h1>Latest News</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, <br />
        adipisicing elit Fugit in quia quidem nostrum quae consequuntur.
      </p>
      <div className="blog-container">
        {blogs.slice(0, 3).map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
