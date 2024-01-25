import "./checkoutIndicators.scss";

const CheckoutIndicators = () => {
  return (
    <div className="checkoutIndicators">
      <div className="horizontal-line">
        <div className="line-dot-container one">
          <p>Billing Information</p>
          <div className="line-dot">1</div>
        </div>
        <div className="line-dot-container two">
          <p>Card Information</p>
          <div className="line-dot">2</div>
        </div>
        <div className="line-dot-container three">
          <p>Successful Message</p>
          <div className="line-dot">3</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutIndicators;
