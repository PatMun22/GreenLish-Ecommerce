/* eslint-disable no-undef */
import i18next from "i18next";
import "./headerTop.scss";
import { GiMultiDirections } from "react-icons/gi";
import { VscLocation } from "react-icons/vsc";

const HeaderTop = () => {
  return (
    <div className="headerTop">
      <div className="conversions">
        <div>
          <select>
            <option value="0" onClick={() => i18next.changeLanguage(en)}>
              English
            </option>
            <option value="1" onClick={() => i18next.changeLanguage(fr)}>
              Francais
            </option>
            <option value="2" onClick={() => i18next.changeLanguage(sw)}>
              Swahili
            </option>
            <option value="3" onClick={() => i18next.changeLanguage(sp)}>
              Española
            </option>
          </select>
        </div>
        <div>
          <select>
            <option value="0">USD</option>
            <option value="1">EURO</option>
            <option value="2">KSH</option>
          </select>
        </div>
      </div>
      <div className="locations">
        <div>
          <VscLocation />
          <h3>office location</h3>
        </div>
        <div>
          <GiMultiDirections />
          <h3>Track your order</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
