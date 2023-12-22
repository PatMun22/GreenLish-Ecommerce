import "./bscarousel.scss";
import { Link } from "react-router-dom";

const BsCarousel = ({ bestsellercarousel, currentSlide }) => {
  return (
    <Link to="products/:id">
      <div className="bs-bottom">
        {bestsellercarousel.map((item, index) => (
          <div
            key={item.id}
            className={`bscarouselitem ${
              currentSlide === index ? "active" : ""
            } ${
              currentSlide === bestsellercarousel.length - 2 ? "second" : ""
            }`}
          >
            <div className="car_image">
              <img src={item.img} alt={`carousel-image`} />
            </div>
            <div className="car_text">
              <p className="category">{item.category}</p>
              <h1>{item.header}</h1>
              <div className="prices">
                <span className="new_price">Ksh. {item.new_price}</span>
                <span className="old_price">Ksh. {item.old_price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default BsCarousel;
