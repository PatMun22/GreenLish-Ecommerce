import "./navbar.scss";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Home</div>
      <div className="shopping_menu">
        <div className="shopping_container">
          <p>Shop</p>
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
