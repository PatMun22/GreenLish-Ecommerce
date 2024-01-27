import { useContext } from "react";
import "./orderSummary.scss";
import { ShopContext } from "../../context/ShopContext";

const OrderSummary = () => {
  const { items, cartItems } = useContext(ShopContext);

  return (
    <div className="order-summary">
      <h1>ORDER SUMMARY</h1>
      <div className="underline"></div>
      <div className="order-summary-container">
        {items.slice(0, 4).map((item) => {
          if (cartItems[item.id] !== 0) {
            return (
              <div key={item.id} className="cart-item-container">
                <img src={item.image} alt={`cart item ${item.id}`} />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>Quantity: 2</p>
                  <h6>{item.price}</h6>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="lower-section">
        <hr />
        <div className="sub-total">
          <p>Sub Total:</p>
          <span>00</span>
        </div>
        <div className="delivery-charge">
          <p>Delivery Charge:</p>
          <span>00</span>
        </div>
        <hr />
        <div className="total-amount">
          <p>Total Amount:</p>
          <span>00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
