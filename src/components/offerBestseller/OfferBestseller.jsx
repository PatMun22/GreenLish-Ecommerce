import { useState } from "react";
import BestSeller from "../bestseller/BestSeller";
import Offer from "../offer/Offer";
import "./offerBestseller.scss";
import { bestsellercarousel } from "../../assets/data";

const OfferBestseller = () => {
  const [activeObslideIndex, setActiveObslideIndex] = useState(0);

  const nextObslide = () => {
    setActiveObslideIndex(activeObslideIndex + 1);
  };

  const prevObslide = () => {
    setActiveObslideIndex(activeObslideIndex - 1);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === bestsellercarousel.length - 2 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? bestsellercarousel.length - 2 : prevSlide - 1
    );
  };

  return (
    <div className="offer-bestseller">
      <Offer
        nextObslide={nextObslide}
        prevObslide={prevObslide}
        activeObslideIndex={activeObslideIndex}
      />
      <BestSeller
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        bestsellercarousel={bestsellercarousel}
      />
    </div>
  );
};

export default OfferBestseller;
