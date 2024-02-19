import { LuAsterisk } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import OrderSummary from "../orderSummary/OrderSummary";
import { LuUser2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import "./billingInformation.scss";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const BillingInformation = () => {
  const {
    handleBillingCardChange,
    handleBillingFormSubmit,
    billingErrors,
    inputStyle,
  } = useContext(ShopContext);
  return (
    <div className="billing-information-container">
      <div className="billing-information">
        <div>
          <h1>Billing Information</h1>
          <form
            onSubmit={handleBillingFormSubmit}
            className="billing-inform-form"
          >
            <div className="personal-info">
              <fieldset>
                <legend>
                  First Name <LuAsterisk className="asterisk" />
                </legend>
                <input
                  type="text"
                  name="billingFirstName"
                  placeholder="Enter your first name"
                  onChange={handleBillingCardChange}
                />
                <LuUser2 className="use-icon" />
              </fieldset>
              {billingErrors.billingFirstName && (
                <span style={inputStyle}>{billingErrors.billingFirstName}</span>
              )}
              <fieldset>
                <legend>
                  Last Name <LuAsterisk className="asterisk" />
                </legend>
                <input
                  type="text"
                  name="billingLastName"
                  placeholder="Enter your last name"
                  onChange={handleBillingCardChange}
                />
                <LuUser2 className="use-icon" />
              </fieldset>
              {billingErrors.billingLastName && (
                <span style={inputStyle}>{billingErrors.billingLastName}</span>
              )}
            </div>
            <div className="email-phone">
              <fieldset>
                <legend>
                  Email <LuAsterisk className="asterisk" />
                </legend>
                <input
                  type="email"
                  name="billingEmail"
                  placeholder="Enter your Email"
                  onChange={handleBillingCardChange}
                />
                <MdEmail className="email-icon" />
              </fieldset>
              {billingErrors.billingEmail && (
                <span style={inputStyle}>{billingErrors.billingEmail}</span>
              )}
              <fieldset>
                <legend>
                  Phone <LuAsterisk className="asterisk" />
                </legend>
                <input
                  type="tel"
                  name="billingPhone"
                  placeholder="79701XXXX"
                  onChange={handleBillingCardChange}
                />
                <MdPhoneAndroid className="phone-icon" />
              </fieldset>
              {billingErrors.billingPhone && (
                <span style={inputStyle}>{billingErrors.billingPhone}</span>
              )}
            </div>
            <fieldset>
              <legend>
                Address <LuAsterisk className="asterisk" />
              </legend>
              <input
                type="text"
                name="billingAddress"
                placeholder="Street address"
                onChange={handleBillingCardChange}
              />
              <LiaMapMarkerAltSolid className="address-icon" />
            </fieldset>
            {billingErrors.billingAddress && (
              <span style={inputStyle}>{billingErrors.billingAddress}</span>
            )}
            <fieldset>
              <input
                type="text"
                name="billingApartment"
                placeholder="Apartment, suffix, "
                onChange={handleBillingCardChange}
              />
            </fieldset>
            {billingErrors.billingApartment && (
              <span style={inputStyle}>{billingErrors.billingApartment}</span>
            )}
            <fieldset>
              <legend>
                City <LuAsterisk className="asterisk" />
              </legend>
              <input
                type="text"
                name="billingCity"
                onChange={handleBillingCardChange}
              />
            </fieldset>
            {billingErrors.billingCity && (
              <span style={inputStyle}>{billingErrors.billingCity}</span>
            )}
            <fieldset>
              <legend>
                Country <LuAsterisk className="asterisk" />
              </legend>
              <input
                type="text"
                name="billingCountry"
                onChange={handleBillingCardChange}
              />
            </fieldset>
            {billingErrors.billingCountry && (
              <span style={inputStyle}>{billingErrors.billingCountry}</span>
            )}
            <fieldset>
              <legend>
                Postcode/zv <LuAsterisk className="asterisk" />
              </legend>
              <input
                type="text"
                name="billingPostCode"
                onChange={handleBillingCardChange}
              />
            </fieldset>
            {billingErrors.billingPostCode && (
              <span style={inputStyle}>{billingErrors.billingPostCode}</span>
            )}
            <button>
              Continue <FaLongArrowAltRight />
            </button>
          </form>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default BillingInformation;
