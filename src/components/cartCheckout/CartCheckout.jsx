import { Link } from "react-router-dom";
import "./cartCheckout.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartCheckout = () => {
  const { getTotalCartAmount, getTotalDiscountAmount, getTotalShippingAmount } =
    useContext(ShopContext);

  let totalCartAmount = getTotalCartAmount();
  let totalDiscountAmount = getTotalDiscountAmount();
  let totalShippingCharge = getTotalShippingAmount();

  let payOutAmount =
    totalCartAmount + totalShippingCharge - totalDiscountAmount;

  return (
    <div className="checkout-container">
      <div className="cart-total">
        <h3>Cart total:</h3>
        <div className="cart-details">
          <div className="detailed-details">
            <p>Total Amount:</p>
            <span>Ksh. {totalCartAmount}</span>
          </div>
          <div className="detailed-details">
            <p>Dscount (Up to 70%):</p>
            <span>-Ksh. {totalDiscountAmount}</span>
          </div>
          <div className="detailed-details">
            <p>Shipping Charge:</p>
            <span>Ksh. {totalShippingCharge}</span>
          </div>
        </div>
        <div className="cart-amount">
          <p>Payments amount:</p>
          <span>Ksh. {payOutAmount}</span>
        </div>
      </div>
      <div className="checkout">
        <Link className="button" to="/checkout">
          proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
