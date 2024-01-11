/* eslint-disable react/prop-types */
import "./productItem.scss";
import ReactStars from "react-rating-stars-component";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductItem = ({ item }) => {
  const { addToCart, onBgChange, color } = useContext(ShopContext);

  // const cartItemAmount = cartItems[item.id];

  return (
    <div className="indiv-product" key={item.id}>
      <div className="image">
        <img src={item.image} alt={`product ${item.title}`} loading="lazy" />
      </div>
      <div className="lower-section">
        <h3>{item.title}</h3>
        <p>{item.foodCart}</p>
        <span>
          <ReactStars
            count={5}
            size={20}
            color="#25bd01"
            activeColor="#ffd700"
            isHalf={true}
          />
          <p className="price">Ksh. {item.price}</p>
        </span>
      </div>
      <div className="buy-like">
        <button onClick={() => addToCart(item.id)}>Add to Cart</button>
        <div className="emojis">
          <CiHeart
            className="heart-emoji"
            style={{ Color: color }}
            onClick={onBgChange}
          />
        </div>
        <Link to={`/shop/${item.id}`} className="emojis">
          <FiEye className="eye-emoji" />
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
