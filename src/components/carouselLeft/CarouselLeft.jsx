import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./carouselLeft.scss";

const CarouselLeft = () => {
  return (
    <div className="carousel-left">
      <h1>
        Buy your{" "}
        <span>
          favourite <br />
          fresh
        </span>{" "}
        food & get <br />
        up to 70% OFF
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
        voluptatum nihil illum impedit accusamus quaerat placeat enim corrupti
      </p>
      <div className="carousel-buttons">
        <Link to="/singlepage/:id">
          <button>Order now</button>
        </Link>
        <div className="blinking">
          <div className="second-ring">
            <div className="inner-ring">
              <BiSolidRightArrow className="solid-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselLeft;
