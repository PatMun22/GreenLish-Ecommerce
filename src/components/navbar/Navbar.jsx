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
          <p>Package</p>
          <IoIosArrowDown />
        </div>
        <div className="shopping_container">
          <p>Blog</p>
          <IoIosArrowDown />
        </div>
        <div className="shopping_container">
          <p>Vendors</p>
          <IoIosArrowDown />
        </div>
        <div className="shopping_container">
          <p>Pages</p>
          <IoIosArrowDown />
        </div>
        <div>
          <p>Contact</p>
        </div>
      </div>
      <button>Book a Package</button>
    </div>
  );
};

export default Navbar;
