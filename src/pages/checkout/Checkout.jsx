import CheckoutCard from "../../components/checkoutCard/CheckoutCard";
import CheckoutIndicators from "../../components/checkoutIndicators/CheckoutIndicators";
import "./checkout.scss";

const CheckoutPage = () => {
  return (
    <div>
      <CheckoutIndicators />
      <div className="checkout-details-box">
        <CheckoutCard />
      </div>
    </div>
  );
};

export default CheckoutPage;
