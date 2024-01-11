import "./cartCheckout.scss";

const CartCheckout = () => {
  return (
    <div className="checkout-container">
      <div className="cart-total">
        <h3>Cart total:</h3>
        <div className="cart-details">
          <div className="detailed-details">
            <p>Total Amount:</p>
            <span>Ksh. {}</span>
          </div>
          <div className="detailed-details">
            <p>Dscount (Up to 70%):</p>
            <span>-Ksh.</span>
          </div>
          <div className="detailed-details">
            <p>Shipping Charge:</p>
            <span>Ksh.</span>
          </div>
        </div>
        <div className="cart-amount">
          <p>Payments amount:</p>
          <span>Ksh.{}</span>
        </div>
      </div>
      <div className="checkout">
        <button>proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartCheckout;
