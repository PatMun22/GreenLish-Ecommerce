import { useContext } from "react";
import "./orderSummary.scss";
import { ShopContext } from "../../context/ShopContext";

const OrderSummary = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="order-summary">
      {Array(cartItems).map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default OrderSummary;
