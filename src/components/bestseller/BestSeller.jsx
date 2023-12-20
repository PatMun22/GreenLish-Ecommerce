import { bestseller, bestsellercarousel } from "../../assets/data";
import BsCarousel from "../bestsellerCarousel/BsCarousel";
import OfferBestselerTop from "../offerbestsellettop/OfferBestselerTop";
import "./bestseller.scss";

const BestSeller = ({
  nextObslide,
  prevObslide,
  activeObslideIndex,
  index,
}) => {
  return (
    <div className="best-seller">
      <OfferBestselerTop
        nextObslide={nextObslide}
        prevObslide={prevObslide}
        {...bestseller}
        index={index}
      />
      <BsCarousel
        bestsellercarousel={bestsellercarousel}
        activeObslideIndex={activeObslideIndex}
      />
    </div>
  );
};

export default BestSeller;
