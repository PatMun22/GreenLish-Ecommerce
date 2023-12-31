/* eslint-disable react/prop-types */
import "./productCategory.scss";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCategory = ({ items }) => {
  const [color, setColor] = useState("");

  const onBgChange = () => {
    setColor("green");
  };

  return (
    <div className="product_category">
      {items.map((item) => (
        <div className="indiv-product" key={item.id}>
          <div className="image">
            <img
              src={item.image}
              alt={`product ${item.title}`}
              loading="lazy"
            />
          </div>
          <div className="lower-section">
            <h3>{item.title}</h3>
            <p>{item.foodCart}</p>
            <span>
              <div className="star-ratings">
                <FaStar className="rating-star" />
                <FaStar className="rating-star" />
                <FaStar className="rating-star" />
                <FaStar className="rating-star" />
                <FaStar className="rating-star" />
              </div>
              <p className="price">Ksh. {item.price}</p>
            </span>
          </div>

          <div className="buy-like">
            <button>Add to Cart</button>
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
      ))}
    </div>
  );
};

export default ProductCategory;
