import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { recommendedProducts } from "../../assets/data";
import "./topRated.scss";

const TopRated = () => {
  return (
    <div className="top-rated">
      <div className="top-div">
        <h1>Top Rated Products</h1>
        <div className="underline"></div>
      </div>
      <div className="lower-div">
        {recommendedProducts.slice(0, 5).map((item) => (
          <Link
            to={`/recommendedProducts/${item.id}`}
            className="item-container"
            key={item.id}
          >
            <img src={item.image} alt={`image ${item.id}`} />
            <div className="amount">
              <p>{item.title}</p>
              <ReactStars
                count={5}
                size={12}
                color="#25bd01"
                activeColor="#ffd700"
                isHalf={true}
              />
              <h5>Top Rated</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
