import ReactStars from "react-rating-stars-component";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { BiSolidRightArrow } from "react-icons/bi";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoMdShare } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { commentSocialIcons, commentSocials } from "../../assets/data";
import "./productSummary.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const ProductSummary = () => {
  const { product } = useContext(ShopContext);

  const {
    image1,
    image2,
    image3,
    image4,
    title,
    new_price,
    old_price,
    product_infor,
    reviews,
    quantity,
  } = product;

  return (
    <div className="product-summary">
      <div className="product-images">
        <div className="image-container image1">
          <div className="scroll-arrows">
            <button className="scroll-left">
              <IoIosArrowRoundBack />
            </button>
            <button className="scroll-right">
              <IoIosArrowRoundForward />
            </button>
          </div>
          <img src={image1} alt="image1" />
        </div>
        <div className="image-container image2">
          <img src={image2} alt="image2" />
        </div>
        <div className="image-container image2">
          <img src={image3} alt="image3" />
        </div>
        <div className="image-container image2">
          <img src={image4} alt="image4" />
        </div>
      </div>
      <div className="product-text">
        {quantity > 0 ? (
          <div className="in-stock">in stock</div>
        ) : (
          <div className="out-of-stock">out of stock</div>
        )}
        <h3>{title}</h3>
        <div className="customer-reviews">
          <ReactStars
            count={5}
            size={15}
            color="#25bd01"
            activeColor="#ffd700"
            isHalf={true}
          />
          <p className="total-reviews">({reviews.length} Customer Reviews)</p>
        </div>
        <div className="price-container">
          <div className="price-box">price</div>
          <h5 className="new-price">Ksh. {new_price}</h5>
          <h6 className="old-price">Ksh. {old_price}</h6>
        </div>
        <div className="product-description">
          <p>{product_infor}</p>
          <p>{product_infor}</p>
        </div>
        <div className="product-quantity">
          <button>-</button>
          <input type="text" />
          <button>+</button>=<p className="total-product-price">Ksh. 500</p>
        </div>
        <button className="add-cart">
          <GiShoppingCart />
          Add to Cart
        </button>
        <div className="item-icons">
          <div className="icon-symbol">
            <CiHeart />
          </div>
          <div className="icon-symbol">
            <BiSolidRightArrow />
          </div>
          <div className=" icon-symbol ">
            <TbArrowsShuffle />
          </div>
          <div className="social-icons">
            <IoMdShare className="share-icon" />
            {commentSocials.map((icon, i) => {
              let CommentSocialIcon = commentSocialIcons[i];
              return (
                <Link
                  to={`https://${icon.name}.com/Greenl_Lish`}
                  target="_blank"
                  className="social-icon-box"
                  key={icon.id}
                >
                  <CommentSocialIcon
                    style={{ color: icon.color }}
                    className="post-social-icon"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="category">
          <h3>Category: </h3>
          <span>Fruits and Drinks</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
