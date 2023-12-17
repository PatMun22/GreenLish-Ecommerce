import DiscountSection from "../discountSection/DiscountSection";
import Services from "../services/Services";
import "./homeBottom.scss";

const HomeBottom = () => {
  return (
    <div className="homeBottom">
      <DiscountSection />
      <Services />
    </div>
  );
};

export default HomeBottom;
