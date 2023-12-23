import { Link } from "react-router-dom";
import "./belowcarousels.scss";
import { belowcarousels } from "../../assets/data";

const BelowCarousels = () => {
  return (
    <div className="below_carousels">
      <div className="bc_image">
        <Link to="/products/:id">
          <img src={belowcarousels.image} alt={belowcarousels.title} />
        </Link>
      </div>
      <div className="bc_text">
        <h1>{belowcarousels.title}</h1>
        <p>
          {belowcarousels.paragraph}
          <span>{belowcarousels.span}</span>
        </p>
        <button>{belowcarousels.button}</button>
      </div>
    </div>
  );
};

export default BelowCarousels;
