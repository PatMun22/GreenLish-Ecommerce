import "./offercarousel.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const OfferCarousel = ({ activeObslideIndex, offercarousel }) => {
  return (
    <Link to="products/:id">
      <div className="offer-bottom">
        {offercarousel.map((item, index) => (
          <div
            key={item.id}
            className={
              index === activeObslideIndex
                ? "obcarouselitem active"
                : "obcarouselitem inactive"
            }
          >
            <div className="car_image">
              <img src={item.img} alt={`carousel-image`} />
            </div>
            <div className="car_text">
              <p className="category">{item.category}</p>
              <h1>{item.header}</h1>
              <div className="ratings">
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
              </div>
              <div className="prices">
                <span className="new_price">Ksh. {item.new_price}</span>
                <span className="old_price">Ksh. {item.old_price}</span>
              </div>
              <p className="description">{item.description}</p>
              <div className="expiry_timeline">
                <div className="time_div">
                  <div className="time_denom"></div>
                  <div className="time_title">Days</div>
                </div>
                <div className="time_div">
                  <div className="time_denom"></div>
                  <div className="time_title">Hours</div>
                </div>
                <div className="time_div">
                  <div className="time_denom"></div>
                  <div className="time_title">Mins</div>
                </div>
                <div className="time_div">
                  <div className="time_denom"></div>
                  <div className="time_title">Sec</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default OfferCarousel;
