import { LiaUserSolid } from "react-icons/lia";
import { GiShoppingCart } from "react-icons/gi";
import "./headerbottom.scss";
import Search from "../search/Search";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <h1 className="logo">
        Green <span>Lish</span>
      </h1>
      <div className="headerbottom_right">
        <Search />

        <Link to="/favorite" className="favorites">
          <FaHeart className="icon" />
          <span>0</span>
          <p>Favorites</p>
        </Link>
        <Link to="/cart" className="cart">
          <GiShoppingCart className="icon" />
          <span>0</span>
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
