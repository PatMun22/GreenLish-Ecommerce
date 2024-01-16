import ReactStars from "react-rating-stars-component";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { BiSolidRightArrow } from "react-icons/bi";
import "./singleProduct.scss";

const SingleProduct = () => {
  return (
    <div className="singleProduct-container">
      <div className="product-images">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="product-text">
        <div>in stock</div>
        <h3>fresh mixed fruits</h3>
        <ReactStars
          count={5}
          size={15}
          color="#25bd01"
          activeColor="#ffd700"
          isHalf={true}
        />
        <div className="price-container">
          <div className="price-box">price</div>
          <h5 className="new-price">Ksh. 200</h5>
          <h6 className="old-price">Ksh. 300</h6>
        </div>
        <div className="product-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, placeat?
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
