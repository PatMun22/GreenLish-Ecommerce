import CardInformation from "../cardInformation/CardInformation";
import OrderSummary from "../orderSummary/OrderSummary";
import "./checkoutCard.scss";

const CheckoutCard = () => {
  return (
    <div className="checkout-card">
      <CardInformation />
      <OrderSummary />
    </div>
  );
};

export default CheckoutCard;
