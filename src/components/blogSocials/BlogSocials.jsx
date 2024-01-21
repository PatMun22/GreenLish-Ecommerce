import "./blogSocials.scss";
import { socials } from "../../assets/data";
import { socialIcons } from "../../assets/data";
import { Link } from "react-router-dom";

const BlogSocials = () => {
  return (
    <div className="blog-socials">
      <h3>Follow Us</h3>
      <div className="underline"></div>
      {socials.map((social, i) => {
        let SocialIcons = socialIcons[i];
        return (
          <div className="social-item" key={social.id}>
            <div
              className="social-icons"
              style={{ backgroundColor: social.color, color: "white" }}
            >
              <SocialIcons className="social-icon" />
            </div>
            <div className="social-name">{social.name}</div>
            <Link
              className="message"
              to={`https://${social.name}.com/Greenl_Lish`}
              target="_blank"
            >
              {social.message}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogSocials;
