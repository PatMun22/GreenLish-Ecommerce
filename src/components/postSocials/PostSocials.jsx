import { commentSocials } from "../../assets/data";
import { commentSocialIcons } from "../../assets/data";
import { Link } from "react-router-dom";

import "./postSocials.scss";

const PostSocials = () => {
  return (
    <div className="post-socials">
      <p>Please Share: </p>
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

export default PostSocials;
