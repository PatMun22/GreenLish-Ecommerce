import "./offerbestsellettop.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const OfferBestselerTop = (props, { nextObslide, prevObslide }) => {
  return (
    <div className="offer-top">
      <div className="top-text">
        <p>{props.p}</p>
        <h1>{props.h1}</h1>
      </div>
      <div className="hr-line"></div>
      <div className="buttons">
        <button className="scroll-btn">
          <IoIosArrowBack onClick={() => prevObslide()} />
        </button>
        <button className="scroll-btn">
          <IoIosArrowForward onClick={() => nextObslide()} />
        </button>
      </div>
    </div>
  );
};

export default OfferBestselerTop;
