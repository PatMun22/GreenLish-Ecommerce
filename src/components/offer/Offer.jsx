/* eslint-disable react/prop-types */
import "./offer.scss";
import OfferCarousel from "../offerCarousel/OfferCarousel";
import OfferBestselerTop from "../offerbestsellettop/OfferBestselerTop";
import { offer, offercarousel } from "../../assets/data";

const Offer = ({ nextObslide, prevObslide, activeObslideIndex, index }) => {
  return (
    <div className="offer">
      <OfferBestselerTop
        {...offer}
        index={index}
        nextObslide={nextObslide}
        prevObslide={prevObslide}
      />
      <OfferCarousel
        offercarousel={offercarousel}
        activeObslideIndex={activeObslideIndex}
      />
    </div>
  );
};

export default Offer;
