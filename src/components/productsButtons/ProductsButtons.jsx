import "./productButtons.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const prodCategories = [
  { id: 1, title: "Recommended" },
  { id: 2, title: "Popular" },
  { id: 3, title: "Most Popular" },
  { id: 4, title: "New Arrival" },
  { id: 5, title: "Categories" },
];

const ProductsButtons = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className="productButtons">
      <div className="buttons">
        {prodCategories.map((item, index) => (
          <button
            className={`btn ${activeBtn === index ? "active" : ""}`}
            key={item.id}
            onClick={() => setActiveBtn(index)}
          >
            {item.title}
          </button>
        ))}
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
