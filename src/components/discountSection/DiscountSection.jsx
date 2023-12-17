import "./discountSection.scss";
import { Link } from "react-router-dom";
import { discounts } from "../../assets/data";

const DiscountSection = () => {
  return (
    <div className="discount-section">
      {discounts.map((discount) => (
        <div className="discount-box" key={discount.id}>
          <div className="left-part">
            <h1>{discount.h1}</h1>
            <span>{discount.span}</span>
            <p>{discount.p}</p>
            <Link to="/singleproduct/:id">
              <button>shop now</button>
            </Link>
          </div>
          <div className="right-part">
            <img src={discount.img} alt={`discounts - ${discount.id}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscountSection;
