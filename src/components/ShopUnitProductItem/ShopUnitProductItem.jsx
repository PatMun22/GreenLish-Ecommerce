/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { GiShoppingCart } from "react-icons/gi";
import "./shopUnitProductItem.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ShopUnitProductItem = ({ item }) => {
  const { addToCart, color, addToWishList } = useContext(ShopContext);
  return (
    <div className="indiv-unit-product">
      <div className="unit-product-image">
        <img src={item.image} alt={`product ${item.title}`} loading="lazy" />
      </div>
      <div className="right-section">
        <h3>{item.title}</h3>
        <span>
          <ReactStars
            count={5}
            size={14}
            color="#25bd01"
            activeColor="#ffd700"
            isHalf={true}
            marginLeft={10}
          />
          <p className="price">Ksh. {item.price}</p>
        </span>
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          laboriosam unde aspernatur perferendis nisi modi sit quidem quos
          dignissimos eveniet.
        </p>

        <div className="buy-like-icons">
          <button onClick={() => addToCart(item.id)}>
            <GiShoppingCart className="cart-icon" />
            Add to Cart
          </button>
          <div className="unit-emojis">
            <CiHeart
              className="heart-emoji"
              style={{ Color: color }}
              onClick={() => addToWishList(item.id)}
            />
          </div>
          <Link to={`/shop/${item.id}`} className="unit-emojis">
            <FiEye className="eye-emoji" />
          </Link>
          <Link
            to={`/category/${item.category}/${item.id}`}
            className="unit-emojis shuffle"
          >
            <TbArrowsShuffle className="shuffle-arrow" />
            <p>category</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopUnitProductItem;
