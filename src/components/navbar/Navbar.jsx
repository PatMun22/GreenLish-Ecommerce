import { Link } from "react-router-dom";
import "./navbar.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        className={activeLink === "home" ? "active-link" : ""}
        onClick={() => handleActiveLink("home")}
      >
        Home
      </Link>
      <div className="shopping_menu">
        <div
          className={`shopping_container ${
            activeLink === "shop" ? "active-link" : ""
          }`}
          onClick={() => handleActiveLink("shop")}
        >
          <Link to="/shop">Shop</Link>
          <IoIosArrowDown />
        </div>
        <div
          className={`shopping_container ${
            activeLink === "package" ? "active-link" : ""
          }`}
          onClick={() => handleActiveLink("package")}
        >
          <Link to="/packages">Package</Link>
          <IoIosArrowDown />
        </div>
        <div
          className={`shopping_container ${
            activeLink === "blog" ? "active-link" : ""
          }`}
          onClick={() => handleActiveLink("blog")}
        >
          <Link to="/blogs">Blogs</Link>
          <IoIosArrowDown />
        </div>
        <div
          className={`shopping_container ${
            activeLink === "vendor" ? "active-link" : ""
          }`}
          onClick={() => handleActiveLink("vendor")}
        >
          <Link to="/vendors">Vendors</Link>
          <IoIosArrowDown />
        </div>
        <div
          className={`shopping_container ${
            activeLink === "page" ? "active-link" : ""
          }`}
          onClick={() => handleActiveLink("page")}
        >
          <Link to="/pages">Pages</Link>
          <IoIosArrowDown />
        </div>
        <div
          className={activeLink === "contact" ? "active-link" : ""}
          onClick={() => handleActiveLink("contact")}
        >
          <Link to="/contacts">Contact</Link>
        </div>
      </div>
      <button>Book a Package</button>
    </div>
  );
};

export default Navbar;
