import { useState } from "react";
import BestSeller from "../bestseller/BestSeller";
import Offer from "../offer/Offer";
import "./offerBestseller.scss";

const OfferBestseller = () => {
  const [activeObslideIndex, setActiveObslideIndex] = useState(0);

  const nextObslide = () => {
    setActiveObslideIndex(activeObslideIndex + 1);
  };

  const prevObslide = () => {
    setActiveObslideIndex(activeObslideIndex - 1);
  };
  return (
    <div className="offer-bestseller">
      <Offer
        nextObslide={nextObslide}
        prevObslide={prevObslide}
        activeObslideIndex={activeObslideIndex}
      />
      <BestSeller
        nextObslide={nextObslide}
        prevObslide={prevObslide}
        activeObslideIndex={activeObslideIndex}
      />
    </div>
  );
};

export default OfferBestseller;
