import { useContext } from "react";
import "./singleService.scss";
import { ShopContext } from "../../context/ShopContext";

const SingleService = () => {
  const { service } = useContext(ShopContext);
  const {
    service_details: {
      heading1,
      heading2,
      heading3,
      heading4,
      heading5,
      heading6,
      heading7,
      heading8,
      heading9,
      listone,
      listtwo,
      listthree,
      listfour,
      listfive,
      listsix,
      listseven,
      listeight,
      listnine,
      listten,
      listeleven,
      listtwelve,
      listthirteen,
      listfourteen,
      listfifteen,
      listsixteen,
      listseventeen,
      listeighteen,
      listnineteen,
      listthirteen_details,
      standard_rate,
      expedited_rate,
      standard_period,
      expedited_period,
      service_summary,
    },
    service_closure: { paragraph1, paragraph2 },
  } = service;

  if (!service) {
    return <p>Service was not found!</p>;
  }

  return (
    <div className="single-service">
      <h1>{heading1}</h1>
      <p>{service_summary}</p>
      <h3>{heading2}</h3>
      <div className="standard-rate">
        <p>{listone}</p>
        <span>:</span>
        <span>Ksh. {standard_rate}</span>
      </div>
      <div className="expedited-rate">
        <p>{listtwo}</p> <span>:</span>
        <span>Ksh. {expedited_rate}</span>
      </div>
      <p>{listthree}</p>
      <h3>{heading3}</h3>
      <p>{listfour}</p>
      <p>{listfive}</p>
      <p>{listsix}</p>
      <p>{listseven}</p>
      <h3>{heading4}</h3>
      <p>{listeight}</p>
      <p>{listnine}</p>
      <p>{listten}</p>
      <h3>{heading5}</h3>
      <div className="standard_shipping">
        <p>{listeleven}</p>
        <span>:</span>
        <span>{standard_period}</span>
      </div>
      <div className="expedited_shipping">
        <p>{listtwelve}</p>
        {service.id === 1 && <span>:</span>}
        <span>{expedited_period}</span>
      </div>
      <h5>{listthirteen}</h5>
      <p>{listthirteen_details}</p>
      <h3>{heading6}</h3>
      <p>{listfourteen}</p>
      <p>{listfifteen}</p>
      <h3>{heading7}</h3>
      <p>{listsixteen}</p>
      <p>{listseventeen}</p>
      <h3>{heading8}</h3>
      <p>{listeighteen}</p>
      <h3>{heading9}</h3>
      <p>{listnineteen}</p>
      <p className="service-closure">{paragraph1}</p>
      <p className="service-closure">{paragraph2}</p>
    </div>
  );
};
export default SingleService;
