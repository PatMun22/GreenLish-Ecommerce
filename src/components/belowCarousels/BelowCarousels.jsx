import { Link } from "react-router-dom";
import "./belowcarousels.scss";
import { belowcarousels } from "../../assets/data";

const BelowCarousels = () => {
  return (
    <div className="below_carousels">
      <div className="bc_image">
        <img src={belowcarousels.image} alt={belowcarousels.title} />
      </div>
      <div className="bc_text">
        <h1>{belowcarousels.title}</h1>
        <p>
          {belowcarousels.paragraph}
          <span>{belowcarousels.span}</span>
        </p>
        <button>
          <Link to="/cart">{belowcarousels.button}</Link>
        </button>
      </div>
    </div>
  );
};

export default BelowCarousels;
