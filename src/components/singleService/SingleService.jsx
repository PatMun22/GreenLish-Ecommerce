import { useContext } from "react";
import "./singleService.scss";
import { ShopContext } from "../../context/ShopContext";

const SingleService = () => {
  const { service } = useContext(ShopContext);
  const {
    h1,
    p,
    service_details: {
      heading1,
      service_rates,
      free_shipping: { shipping_title, shipping_details },
      processing_time: { time_title, time_details },
      delivery_times: { delivery_title, delivery_details },
      order_tracking: { tracking_title, tracking_details },
      shipping_address: { address_title, address_details },
      lost_packages: { lost_title, lost_details },
      returns_exchanges: { return_title, return_details },
    },
    service_closure: { paragraph1, paragraph2 },
  } = service;
  if (!service) {
    return <p>Service was not found!</p>;
  }

  return (
    <div className="single-service">
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
};
export default SingleService;
