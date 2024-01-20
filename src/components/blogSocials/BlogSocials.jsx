import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import "./blogSocials.scss";
import { socials } from "../../assets/data";

const BlogSocials = () => {
  const SocialIcons = [
    FaFacebookF,
    FaTwitter,
    IoLogoYoutube,
    FaInstagramSquare,
  ];
  return (
    <div className="blog-socials">
      {socials.map((social, i) => {
        let socialIcons = SocialIcons;
        return (
          <div className="social-item" key={social.id}>
            <h3>Follow Us</h3>
            <div
              className="social-icons"
              style={{ backgroundColor: social.color, color: "white" }}
            >
              {socialIcons[i]} <div className="small-square"></div>
            </div>
            <div className="social-name">{social.name}</div>
            <div className="message">{social.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogSocials;
