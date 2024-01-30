import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./additionalInformation.scss";

const AdditionalInformation = () => {
  const { product } = useContext(ShopContext);
  const {
    image2,
    additional_info: { name, weight, weight_capacity, color, other_infor },
  } = product;
  return (
    <div className="additional-information-container">
      <div className="additional-information-text">
        <div className="infor-container">
          <h5>Name</h5>
          <span>:</span>
          <p>{name}</p>
        </div>
        <div className="infor-container">
          <h5>Weight</h5>
          <span>:</span>
          <p>{weight}</p>
        </div>
        <div className="infor-container">
          <h5>Weight capacity</h5>
          <span>:</span>
          <p>{weight_capacity}</p>
        </div>
        <div className="infor-container">
          <h5>Color</h5>
          <span>:</span>
          <p>{color}</p>
        </div>
        <div className="infor-container">
          <h5>Other info</h5>
          <span>:</span>
          <p>{other_infor}</p>
        </div>
      </div>
      <div className="additional-information-image">
        <img src={image2} alt="description image" loading="lazy" />
      </div>
    </div>
  );
};

export default AdditionalInformation;
