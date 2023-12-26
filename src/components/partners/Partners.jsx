import { partners } from "../../assets/data";
import "./partners.scss";

const Partners = () => {
  return (
    <div className="partners">
      <div className="top-division">
        <div className="hor-line"></div>
        <h2>Our Partners</h2>
      </div>
      <div className="bottom-division">
        {partners.map((partner) => (
          <div className="partner-ind" key={`partner ${partner.id}`}>
            <img src={partner.image} alt={`partner ${partner.id}`} />
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
