import "./footer.scss";
import { Link } from "react-router-dom";
import { LiaCopyrightSolid } from "react-icons/lia";
import Newsletter from "../newsletter/Newsletter";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/Apple.png";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import discover from "../../assets/images/discover.png";
import mpesa from "../../assets/images/mpesa.png";

const Footer = () => {
  return (
    <div className="footer">
      <Newsletter />
      <div className="linkTitles">
        <div className="links">
          <h1>About</h1>
          <Link to="/categories" className="link">
            Categories
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/products" className="link">
            Latest Products
          </Link>
          <Link to="/map" className="link">
            Site Map
          </Link>
          <Link to="/history" className="link">
            History
          </Link>
        </div>
        <div className="links">
          <h1>Categories</h1>
          <Link to="/fruits&drinks" className="link">
            Fruits & Drinks
          </Link>
          <Link to="/computer" className="link">
            Computer
          </Link>
          <Link to="/food" className="link">
            Food
          </Link>
          <Link to="/laptop" className="link">
            Laptop
          </Link>
          <Link to="/milk&candy" className="link">
            Milk & Candy
          </Link>
        </div>
        <div className="links">
          <h1>Our Company</h1>
          <Link to="/delivery" className="link">
            Delivery
          </Link>
          <Link to="/legal" className="link">
            Legal Notice
          </Link>
          <Link to="/t&cs" className="link">
            Terms and Conditions of Use
          </Link>
          <Link to="/about" className="link">
            About Us
          </Link>
          <Link to="/payment" className="link">
            Secure Payment
          </Link>
        </div>
        <div className="links">
          <h1>Download App</h1>
          <div className="app_download">
            <img src={apple} alt="Apple download app" />
            <img src={google} alt="Goole play app" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <div className="footerbleft">
          <p>
            <LiaCopyrightSolid />
            Copyright 2023. All rights reserved. By Waphwebs.
          </p>
        </div>
        <div className="payment_cards">
          <img src={visa} alt="visa card" />
          <img src={master} alt="master card" />
          <img src={discover} alt="discover card" />
          <img src={mpesa} alt="mpesa logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
