import BelowCarousels from "../belowCarousels/BelowCarousels";
import DiscountSection from "../discountSection/DiscountSection";
import OfferBestseller from "../offerBestseller/OfferBestseller";
import Products from "../products/Products";
import Services from "../services/Services";
import "./homeBottom.scss";

const HomeBottom = () => {
  return (
    <div className="homeBottom">
      <DiscountSection />
      <Services />
      <OfferBestseller />
      <BelowCarousels />
      <Products />
    </div>
  );
};

export default HomeBottom;
