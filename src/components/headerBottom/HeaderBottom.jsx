import { LiaUserSolid } from "react-icons/lia";
import { GiShoppingCart } from "react-icons/gi";
// import { IoMdHeart } from "react-icons/io";
import "./headerbottom.scss";
import Search from "../search/Search";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const HeaderBottom = () => {
  const { getNumberOfCartItems, getNumberOfWishListItems } =
    useContext(ShopContext);

  let numberOfCartItems = getNumberOfCartItems();
  let numberOfWishListItems = getNumberOfWishListItems();

  return (
    <div className="headerBottom">
      <h1 className="logo">
        Green <span>Lish</span>
      </h1>
      <div className="headerbottom_right">
        <Search />
        <Link to="/wishlist" className="favorites">
          <FaHeart className="icon" />
          <span>{numberOfWishListItems}</span>
        </Link>
        <Link to="/cart" className="cart">
          <GiShoppingCart className="icon" />
          <span>{numberOfCartItems}</span>
        </Link>
        <Link to="/profile" className="profile">
          <LiaUserSolid className="icon" />
          <p>My Account</p>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default HeaderBottom;
