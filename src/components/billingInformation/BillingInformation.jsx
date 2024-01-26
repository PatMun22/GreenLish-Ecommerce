import { LuAsterisk } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import OrderSummary from "../orderSummary/OrderSummary";
import "./billingInformation.scss";

const BillingInformation = () => {
  return (
    <div className="billing-information-container">
      <div className="billing-information">
        <div>
          <h1>Billing Information</h1>
          <form action="" className="billing-inform-form">
            <div className="personal-info">
              <fieldset>
                <legend>
                  First Name <LuAsterisk className="asterisk" />
                </legend>
                <input type="text" placeholder="Enter your first name" />
              </fieldset>
              <fieldset>
                <legend>
                  Last Name <LuAsterisk className="asterisk" />
                </legend>
                <input type="text" placeholder="Enter your last name" />
              </fieldset>
            </div>
            <div className="email-phone">
              <fieldset>
                <legend>
                  Email <LuAsterisk className="asterisk" />
                </legend>
                <input type="email" placeholder="Enter your Email" />
              </fieldset>
              <fieldset>
                <legend>
                  Phone <LuAsterisk className="asterisk" />
                </legend>
                <input type="tel" placeholder="79701XXXX" />
              </fieldset>
            </div>
            <fieldset>
              <legend>
                Address <LuAsterisk className="asterisk" />
              </legend>
              <input type="text" placeholder="Street address" />
            </fieldset>
            <fieldset>
              <input type="text" placeholder="Apartment, suffix, " />
            </fieldset>
            <fieldset>
              <legend>
                City <LuAsterisk className="asterisk" />
              </legend>
              <input type="text" />
            </fieldset>
            <fieldset>
              <legend>
                Country <LuAsterisk className="asterisk" />
              </legend>
              <input type="text" />
            </fieldset>
            <fieldset>
              <legend>
                Postcode/zv <LuAsterisk className="asterisk" />
              </legend>
              <input type="text" />
            </fieldset>
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
