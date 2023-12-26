import "./blog.scss";
import { blogs } from "../../assets/data";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

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
        {blogs.map((blog) => (
          <div className="blog-item" key={blog.id}>
            <Link to="/bog/:id">
              <img src={blog.image} alt={`blog post ${blog.id}`} />
            </Link>
            <div className="date-comment">
              <div className="date">{blog.date}</div>
              <div className="vert-line"></div>
              <div className="comment">{blog.comments} Comments</div>
              <div className="vert-line"></div>
              <div className="category">{blog.cartegory}</div>
            </div>
            <h3>{blog.description}</h3>
            <Link to="/bog/:id" className="blog-link">
              <p>
                continue reading <IoIosArrowRoundForward />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
