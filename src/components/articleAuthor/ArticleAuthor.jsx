import { Link } from "react-router-dom";
import { commentSocialIcons, commentSocials } from "../../assets/data";
import "./articleAuthor.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ArticleAuthor = () => {
  const { isHovering, handleMouseEnter, handleMouseLeave, blog } =
    useContext(ShopContext);
  return (
    <div className="article-author">
      <img
        src="https://images.pexels.com/photos/16371326/pexels-photo-16371326/free-photo-of-man-in-black-suit-walking-on-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="author image"
      />
      <div className="article-text">
        <div className="top-sec">
          <h1 className="author-name">{blog.author}</h1>
          <p className="author-profession">Food Stylist - </p>
        </div>
        <p className="about-author">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut
          maxime doloremque molestiae eos repudiandae voluptatum quod sit
          quibusdam blanditiis!
        </p>
        <div className="author-socials">
          {commentSocials.map((icon, i) => {
            let CommentSocialIcon = commentSocialIcons[i];
            return (
              <Link
                to={`https://${icon.name}.com/${blog.author}`}
                target="_blank"
                className="social-icon-box"
                key={icon.id}
              >
                <CommentSocialIcon
                  className="post-social-icon"
                  style={{ color: isHovering[i] ? icon.color : "black" }}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthor;
