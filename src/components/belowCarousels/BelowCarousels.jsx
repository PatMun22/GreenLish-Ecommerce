import { Link } from "react-router-dom";
import "./belowcarousels.scss";
import { belowcarousels } from "../../assets/data";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const BelowCarousels = () => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="below_carousels">
      <div className="bc_image">
        <Link to="/shop/9">
          <img src={belowcarousels.image} alt={belowcarousels.title} />
        </Link>
      </div>
      <div className="bc_text">
        <h1>{belowcarousels.title}</h1>
        <p>
          {belowcarousels.paragraph}
          <span>{belowcarousels.span}</span>
        </p>
        <button onClick={() => addToCart(belowcarousels.id)}>
          {belowcarousels.button}
        </button>
      </div>
    </div>
  );
};

export default BelowCarousels;
