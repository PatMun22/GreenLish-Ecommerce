import { Link } from "react-router-dom";
import "./navbar.scss";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <div className="shopping_menu">
        <div className="shopping_container">
          <Link to="/shop">Shop</Link>
          <IoIosArrowDown />
        </div>
        <div className="shopping_container">
          <Link to="/packages">Package</Link>
          <IoIosArrowDown />
        </div>
        <div className="shopping_container">
          <Link to="/blogs">Blogs</Link>
          <IoIosArrowDown />
        </div>
        <div className="shopping_container">
          <Link to="/vendors">Vendors</Link>
          <IoIosArrowDown />
        </div>
        <div className="shopping_container">
          <Link to="/pages">Pages</Link>
          <IoIosArrowDown />
        </div>
        <div>
          <Link to="/contacts">Contact</Link>
        </div>
      </div>
      <button>Book a Package</button>
    </div>
  );
};

export default Navbar;
