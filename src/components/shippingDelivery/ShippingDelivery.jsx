import { useContext } from "react";
import "./shippingDelivery.scss";
import { ShopContext } from "../../context/ShopContext";

const ShippingDelivery = () => {
  const { product } = useContext(ShopContext);
  const {
    image1,
    shipping: {
      title,
      details,
      subtopic,
      timeline: { time_title, time_schedule },
    },
  } = product;
  return (
    <div className="shipping-delivery-container">
      <div className="shipping-delivery-image">
        <img src={image1} alt="delivery means" />
      </div>
      <div className="shipping-delivery-details">
        <h3>{title}</h3>
        <p>{details}</p>
        <h5>{subtopic}</h5>
        <p>{details}</p>

        <div className="time-schedule">
          <h4>{time_title}</h4>

          <div className="time-frame">
            <h6>{time_schedule[0].day}</h6> <span>:</span>
            <p>({time_schedule[0].time})</p>
          </div>
          <div className="time-frame">
            <h6>{time_schedule[1].day}</h6> <span>:</span>
            <p>({time_schedule[1].time})</p>
          </div>
        </div>
        <div className="advisory">
          <strong>Note:</strong>
          <p>
            Friday is a closed day and during unexpected natural disaster there
            may be late delivery.
          </p>
        </div>
        <p className="advisory-p">
          For any Query Please Call: <span>+254 719710778</span> or Mail
          <span>pwafula62@gmail.com.</span>
        </p>
      </div>
    </div>
  );
};

export default ShippingDelivery;
