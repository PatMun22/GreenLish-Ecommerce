import { paymentCards } from "../../assets/data";
import OrderSummary from "../orderSummary/OrderSummary";
import { LuUser2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { LiaUnlockAltSolid } from "react-icons/lia";
import "./cardInformation.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CardInformation = () => {
  const { handleCardChange, handleCardInfoSubmit, inputStyle, cardErrors } =
    useContext(ShopContext);
  return (
    <div className="card-info-container">
      <div className="card-information">
        <div>
          <h1>Card Information</h1>
          <p>Select one</p>
          <div className="payment-cards">
            {paymentCards.map((card) => (
              <img src={card.image} key={card.id} />
            ))}
          </div>
          <form onSubmit={handleCardInfoSubmit} className="payament-inputs">
            <fieldset>
              <legend>Full Name</legend>
              <input
                type="text"
                placeholder="According To Your Card"
                name="cardFullName"
                onChange={handleCardChange}
              />
              <LuUser2 className="use-icon" />
            </fieldset>
            {cardErrors.cardFullName && (
              <span style={inputStyle}>{cardErrors.cardFullName}</span>
            )}
            <fieldset>
              <legend>Card Number</legend>
              <input
                type="text"
                name="cardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
                onChange={handleCardChange}
              />
            </fieldset>
            {cardErrors.cardNumber && (
              <span style={inputStyle}>{cardErrors.cardNumber}</span>
            )}
            <div className="date-cvv">
              <fieldset>
                <legend>Expiry Date</legend>
                <input
                  type="date"
                  name="expiryDate"
                  onChange={handleCardChange}
                />
              </fieldset>
              {cardErrors.expiryDate && (
                <span style={inputStyle}>{cardErrors.expiryDate}</span>
              )}
              <fieldset>
                <legend>Code CVV</legend>
                <input
                  type="text"
                  name="codeCvv"
                  onChange={handleCardChange}
                  placeholder="CVV"
                />
                <LiaUnlockAltSolid className="cvv-icon" />
              </fieldset>
              {cardErrors.codeCvv && (
                <span style={inputStyle}>{cardErrors.codeCvv}</span>
              )}
            </div>
            <fieldset>
              <legend>Your Email</legend>
              <input
                type="email"
                placeholder="Type Your Card Email"
                name="cardEmail"
                onChange={handleCardChange}
              />
              <MdEmail className="email-icon" />
            </fieldset>
            {cardErrors.cardEmail && (
              <span style={inputStyle}>{cardErrors.cardEmail}</span>
            )}
            <label htmlFor="">
              <input type="checkbox" /> Save my card for further transactions
            </label>
            <div className="btn-container">
              <button>Go Back</button>
              <button>Pay Now</button>
            </div>
          </form>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default CardInformation;
