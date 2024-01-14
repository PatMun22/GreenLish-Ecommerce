/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./productButtons.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ShopContext } from "../../context/ShopContext";

const ProductsButtons = () => {
  const { handleButtonClick, activeButton } = useContext(ShopContext);

  return (
    <div className="productButtons">
      <div className="buttons">
        <button
          className={`btn ${activeButton === "All" ? "active" : ""}`}
          onClick={() => handleButtonClick("All")}
        >
          All Cats
        </button>
        <button
          className={`btn ${activeButton === "Recommended" ? "active" : ""}`}
          onClick={() => handleButtonClick("Recommended")}
        >
          Recommended
        </button>
        <button
          className={`btn ${activeButton === "Popular" ? "active" : ""}`}
          onClick={() => handleButtonClick("Popular")}
        >
          Popular
        </button>
        <button
          className={`btn ${activeButton === "Most Popular" ? "active" : ""}`}
          onClick={() => handleButtonClick("Most Popular")}
        >
          Most Popular
        </button>
        <button
          className={`btn ${activeButton === "New Arrival" ? "active" : ""}`}
          onClick={() => handleButtonClick("New Arrival")}
        >
          New Arrival
        </button>
      </div>
      <div className="btn-hr"></div>
      <div className="nav-btns">
        <button>
          <IoIosArrowBack />
        </button>
        <button>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ProductsButtons;
