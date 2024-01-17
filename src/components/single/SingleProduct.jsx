/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { BiSolidRightArrow } from "react-icons/bi";
import "./singleProduct.scss";

const SingleProduct = (props) => {
  return (
    <div className="singleProduct-container">
      <div className="product-images">
        <img src={props.image1} alt="image1" />
        <img src={props.image2} alt="image2" />
        <img src={props.image3} alt="image3" />
        <img src={props.image4} alt="image4" />
      </div>
      <div className="product-text">
        <div>in stock</div>
        <h3>{props.title}</h3>
        <ReactStars
          count={5}
          size={15}
          color="#25bd01"
          activeColor="#ffd700"
          isHalf={true}
        />
        <div className="price-container">
          <div className="price-box">price</div>
          <h5 className="new-price">{props.new_price}</h5>
          <h6 className="old-price">{props.old_price}</h6>
        </div>
        <div className="product-description">
          <p>{props.product_infor}</p>
        </div>
        <div className="product-quantity">
          <button>-</button>
          <input type="text" />
          <button>+</button>
          <p className="total-product-price"></p>
        </div>
        <button className="add-cart">
          <GiShoppingCart />
          Add to cart
        </button>
        <div className="item-icons">
          <CiHeart />
          <BiSolidRightArrow />
          div.
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
