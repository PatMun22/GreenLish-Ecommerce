import "./categoriesBox.scss";
import { AllCategories } from "../../assets/data";
import { Link } from "react-router-dom";

const CategoriesBox = () => {
  return (
    <div className="categories-box">
      <div className="top-div">
        <h1>Categories</h1>
        <div className="underline"></div>
      </div>
      <div className="lower-div">
        {AllCategories.map((item) => (
          <Link
            to={`/categories/${item.id}`}
            className="item-container"
            key={item.id}
          >
            <p>{item.category}</p>
            <div className="amount">{item.amount}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBox;
