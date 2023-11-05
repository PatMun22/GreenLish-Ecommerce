import "./headerTop.scss";
import { GiMultiDirections } from "react-icons/gi";
import { VscLocation } from "react-icons/vsc";

const HeaderTop = () => {
  return (
    <div className="headerTop">
      <div className="conversions">
        <div>
          <h3>English</h3>
          <img src="/down.svg" alt="" />
        </div>
        <div>
          <h3>USD</h3>
          <img src="/down.svg" alt="" />
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
