import ReactStars from "react-rating-stars-component";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiStar } from "react-icons/ci";

import { useContext } from "react";
import "./reviews.scss";
import { ShopContext } from "../../context/ShopContext";

const Reviews = () => {
  const { product } = useContext(ShopContext);
  const { reviews } = product;
  return (
    <div className="reviews">
      <div className="review-comment">
        {reviews.slice(0, 2).map((review) => (
          <div className="review-container" key={review.name}>
            <div className="image-container">
              <img src={review.image} alt="reviewer image" />
            </div>
            <div className="review-details">
              <h3>{review.name}</h3>
              <div className="review-date-rating">
                <p>{review.date}</p>
                <ReactStars
                  classNames="stars"
                  count={5}
                  size={20}
                  color="#25bd01"
                  activeColor="#ffd700"
                  isHalf={true}
                />
              </div>
              <p>{review.info}</p>
              <button>Reply</button>
            </div>
          </div>
        ))}
        <button>
          see more
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>

      <div className="review-comment-input">
        <h2>Add a review</h2>
        <p>
          Your email address will not be published. Required fields are marked.
        </p>
        <CiStar />
        <CiStar />
        <CiStar />
        <CiStar />
        <CiStar />
        <form action="">
          <fieldset>
            <legend>Name</legend>
            <input type="text" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input type="email" />
          </fieldset>
          <fieldset>
            <legend>Your Review</legend>
            <input type="text" />
          </fieldset>

          <label htmlFor="">
            <input type="checkbox" /> Save my name, email, and website on this
            browser for next time.
          </label>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
