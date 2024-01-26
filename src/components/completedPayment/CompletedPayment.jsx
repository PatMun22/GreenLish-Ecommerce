import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./completedPayment.scss";

const CompletedPayment = () => {
  return (
    <div className="successful-payment">
      <div className="check-mark-container">
        <GiCheckMark className="checkmark" />
        <div className="dots one"></div>
        <div className="dots two"></div>
        <div className="dots three"></div>
        <div className="dots four"></div>
        <div className="dots five"></div>
        <div className="dots six"></div>
        <div className="dots seven"></div>
      </div>
      <h1>Congratulations!</h1>
      <p>
        You&apos;ve <span>successfully completed</span> order
      </p>
      <Link to="/shop" className="to-shop-page">
        Back to the Shop Page
      </Link>
    </div>
  );
};

export default CompletedPayment;
