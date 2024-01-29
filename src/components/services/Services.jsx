import "./services.scss";
import { services } from "../../assets/data";
import { LuHeartHandshake } from "react-icons/lu";
import { HiArrowPath } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const serviceIcons = [
  LuHeartHandshake,
  HiArrowPath,
  FaMoneyCheckDollar,
  BiSupport,
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service, index) => {
        const ServiceIcons = serviceIcons[index];
        return (
          <div className="service-box" key={service.id}>
            <Link to={`/services/${service.id}`}>
              <div className="icon-box">
                <ServiceIcons className="serviceIcon" />
              </div>
            </Link>
            <div className="text-box">
              <h1>{service.h1}</h1>
              <p>{service.p}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
