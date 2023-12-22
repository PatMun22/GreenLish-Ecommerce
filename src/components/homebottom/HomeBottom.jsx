import BelowCarousels from "../belowCarousels/BelowCarousels";
import DiscountSection from "../discountSection/DiscountSection";
import OfferBestseller from "../offerBestseller/OfferBestseller";
import Services from "../services/Services";
import "./homeBottom.scss";

const HomeBottom = () => {
  return (
    <div className="homeBottom">
      <DiscountSection />
      <Services />
      <OfferBestseller />
      <BelowCarousels />
    </div>
  );
};

export default HomeBottom;
