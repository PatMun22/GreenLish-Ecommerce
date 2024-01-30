import { useContext } from "react";
import "./description.scss";
import { ShopContext } from "../../context/ShopContext";

const Description = () => {
  const { product } = useContext(ShopContext);
  const {
    image1,
    description: {
      topic,
      paragraph1,
      subtopic1,
      paragraph2,
      subtopic2,
      paragraph3,
    },
  } = product;
  return (
    <div className="description-container">
      <div className="description-text">
        <h1>{topic}</h1>
        <p>{paragraph1}</p>
        <h4>{subtopic1}</h4>
        <p>{paragraph2}</p>
        <h4>{subtopic2}</h4>
        <p>{paragraph3}</p>
      </div>
      <div className="description-image">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default Description;
