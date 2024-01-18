import { Link } from "react-router-dom";
import "./cook.scss";

const Cook = () => {
  return (
    <div className="cook">
      <div className="overlay">
        <h2>Learn How to Cook Healthy Foods</h2>
        <Link to="/blogs" className="link">
          Click to Learn
        </Link>
      </div>
    </div>
  );
};

export default Cook;
