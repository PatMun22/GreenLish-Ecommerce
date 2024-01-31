import { useContext } from "react";
import "./singleService.scss";
import { ShopContext } from "../../context/ShopContext";

const SingleService = () => {
  const { service } = useContext(ShopContext);

  const { h1, p } = service;
  {
    !service && <p>Service was not found!</p>;
  }
  return (
    <div className="single-service">
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
};
export default SingleService;
