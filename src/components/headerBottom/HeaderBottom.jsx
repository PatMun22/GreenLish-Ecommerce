import { LiaUserSolid } from "react-icons/lia";
import { GiShoppingCart } from "react-icons/gi";
import "./headerbottom.scss";
import Search from "../search/Search";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <h1 className="logo">
        Green <span>Lish</span>
      </h1>
      <div className="headerbottom_right">
        <Search />
        <Link to="/profile" className="profile">
          <LiaUserSolid className="icon" />
          <p>
            Hello! <br />
            <span>Your Account</span>
          </p>
        </Link>
        <Link to="/cart" className="cart">
          <GiShoppingCart className="icon" />
          <span>0</span>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default HeaderBottom;
