import { Link } from "react-router-dom";
import { commentSocialIcons, commentSocials } from "../../assets/data";
import "./socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      {commentSocials.map((icon, i) => {
        let CommentSocialIcon = commentSocialIcons[i];
        return (
          <Link
            to={`https://${icon.name}.com/Greenl_Lish`}
            target="_blank"
            className="social-icon-box"
            key={icon.id}
          >
            <CommentSocialIcon
              style={{ color: icon.color }}
              className="post-social-icon"
            />
            <span>{icon.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
