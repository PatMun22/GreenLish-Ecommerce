/* eslint-disable react/prop-types */
import { useState } from "react";
import "./productButtons.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { filterButtons } from "../../assets/data";

const ProductsButtons = ({ filterItems, recommendedProducts, setItems }) => {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (filter) => {
    setActiveButton(filter);
    switch (filter) {
      case "All":
        setItems(recommendedProducts);
        break;
      case "Recommended":
        filterItems("Recommended");
        break;
      case "Popular":
        filterItems("Popular");
        break;
      case "Most Popular":
        filterItems("Most Popular");
        break;
      case "New Arrival":
        filterItems("New Arrival");
        break;
      default:
        break;
    }
  };

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
