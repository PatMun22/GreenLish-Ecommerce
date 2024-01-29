/* eslint-disable react/prop-types */
import "./offercarousel.scss";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ProductExpiry from "../productExpiry/ProductExpiry";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const OfferCarousel = ({ activeObslideIndex, offercarousel }) => {
  const { calculateTimeDifference } = useContext(ShopContext);

  return (
    <Link to="products/:id">
      <div className="offer-bottom">
        {offercarousel.map((item, index) => {
          const { days, hours, minutes, seconds } = calculateTimeDifference(
            item.expiry_date
          );

          return (
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
                  <ReactStars
                    count={5}
                    size={15}
                    color="#25bd01"
                    activeColor="#ffd700"
                    isHalf={true}
                  />
                </div>
                <div className="prices">
                  <span className="new_price">Ksh. {item.new_price}</span>
                  <span className="old_price">Ksh. {item.old_price}</span>
                </div>
                <p className="description">{item.description}</p>
                <ProductExpiry
                  days={days}
                  hours={hours}
                  minutes={minutes}
                  seconds={seconds}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default OfferCarousel;
