/* eslint-disable react/prop-types */
import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import "./shopProductItem.scss";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const ShopProductItem = ({ item }) => {
  const { addToCart, onBgChange, color } = useContext(ShopContext);
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

export default ShopProductItem;
