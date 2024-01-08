/* eslint-disable react/prop-types */
import "./offercarousel.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductExpiry from "../productExpiry/ProductExpiry";

const OfferCarousel = ({ activeObslideIndex, offercarousel }) => {
  const calculateTimeDifference = (date_info) => {
    const current_date = new Date();
    const end_date = new Date(date_info);

    const timeDifferInMilliSec = Math.abs(end_date - current_date);

    const days = Math.floor(timeDifferInMilliSec / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifferInMilliSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifferInMilliSec % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifferInMilliSec % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

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
