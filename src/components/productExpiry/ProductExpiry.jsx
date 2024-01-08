/* eslint-disable react/prop-types */
import "./productExpiry.scss";

const ProductExpiry = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timeline-container">
      <h4>Time To Expiry:-</h4>
      <div className="expiry_timeline">
        <div className="time_div">
          <div className="time_denom">{days}</div>
          <div className="time_title">Days</div>
        </div>
        <div className="time_div">
          <div className="time_denom">{hours}</div>
          <div className="time_title">Hours</div>
        </div>
        <div className="time_div">
          <div className="time_denom">{minutes}</div>
          <div className="time_title">Mins</div>
        </div>
        <div className="time_div">
          <div className="time_denom">{seconds}</div>
          <div className="time_title">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default ProductExpiry;
