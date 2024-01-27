import { LuAsterisk } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import OrderSummary from "../orderSummary/OrderSummary";
import { LuUser2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
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
                <LuUser2 className="use-icon" />
              </fieldset>
              <fieldset>
                <legend>
                  Last Name <LuAsterisk className="asterisk" />
                </legend>
                <input type="text" placeholder="Enter your last name" />
                <LuUser2 className="use-icon" />
              </fieldset>
            </div>
            <div className="email-phone">
              <fieldset>
                <legend>
                  Email <LuAsterisk className="asterisk" />
                </legend>
                <input type="email" placeholder="Enter your Email" />
                <MdEmail className="email-icon" />
              </fieldset>
              <fieldset>
                <legend>
                  Phone <LuAsterisk className="asterisk" />
                </legend>
                <input type="tel" placeholder="79701XXXX" />
                <MdPhoneAndroid className="phone-icon" />
              </fieldset>
            </div>
            <fieldset>
              <legend>
                Address <LuAsterisk className="asterisk" />
              </legend>
              <input type="text" placeholder="Street address" />
              <LiaMapMarkerAltSolid className="address-icon" />
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
