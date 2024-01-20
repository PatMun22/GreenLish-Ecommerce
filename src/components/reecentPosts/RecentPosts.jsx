import { Link } from "react-router-dom";
import "./recentPosts.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const RecentPosts = () => {
  const { blogItems } = useContext(ShopContext);

  return (
    <div className="recent-posts">
      <div className="top-post-div">
        <h1>Recent Posts</h1>
        <div className="underline"></div>
      </div>
      <div className="lower-post-div">
        {blogItems.slice(0, 4).map((item) => (
          <Link
            to={`/blogs/${item.id}`}
            className="item-container"
            key={item.id}
          >
            <img src={item.image} alt={`image ${item.id}`} loading="lazy" />
            <div className="blog-details">
              <p className="category">{item.cartegory}</p>
              <p className="date">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
