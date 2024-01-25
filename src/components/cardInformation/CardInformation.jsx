import { paymentCards } from "../../assets/data";
import "./cardInformation.scss";

const CardInformation = () => {
  return (
    <div className="card-information">
      <h1>Card Information</h1>
      <p>Select one</p>
      <div className="payment-cards">
        {paymentCards.map((card) => (
          <img src={card.image} key={card.id} />
        ))}
      </div>
      <form action="" className="payament-inputs">
        <fieldset>
          <legend>Full Name</legend>
          <input type="text" placeholder="According To Your Card" />
        </fieldset>
        <fieldset>
          <legend>Card Number</legend>
          <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
        </fieldset>
        <div className="date-cvv">
          <fieldset>
            <legend>Expiry Date</legend>
            <input type="date" />
          </fieldset>
          <fieldset>
            <legend>Code CVV</legend>
            <input type="text" />
          </fieldset>
        </div>
        <fieldset>
          <legend>Your Email</legend>
          <input type="email" placeholder="Type Your Card Email" />
        </fieldset>
        <label htmlFor="">
          <input type="checkbox" /> Save my card for further transactions
        </label>
        <div className="btn-container">
          <button>Go Back</button>
          <button>Pay Now</button>
        </div>
      </form>
    </div>
  );
};

export default CardInformation;
