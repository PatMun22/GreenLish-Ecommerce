import { useContext } from "react";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import "./vendor.scss";
import { ShopContext } from "../../context/ShopContext";
import Socials from "../socials/Socials";

const Vendor = () => {
  const { product } = useContext(ShopContext);
  const {
    vendor_info: {
      store_name,
      location,
      store_description,
      image,
      vendor_details,
    },
  } = product;
  return (
    <div className="vendor-container">
      <div className="vendor-details">
        <h1>{store_name}</h1>
        <div className="vendor-location">
          <LiaMapMarkerAltSolid />
          {location}
        </div>
        <p className="store-detais">{store_description}</p>
        <div className="vendor-details">
          <div className="vendor-detail">
            <h4>Store Name</h4>
            <span>:</span>
            <p>{vendor_details[0].store_name}</p>
          </div>
          <div className="vendor-detail">
            <h4>Total products</h4>
            <span>:</span>
            <p>{vendor_details[1].total_products}</p>
          </div>
          <div className="vendor-detail">
            <h4>distribution area</h4>
            <span>:</span>
            <p>{vendor_details[2].distribution_area}</p>
          </div>
          <div className="vendor-detail">
            <h4>average revenue</h4>
            <span>:</span>
            <p>Ksh. {vendor_details[3].average_revenue}</p>
          </div>
          <div className="vendor-detail">
            <h4>product category</h4>
            <span>:</span>
            <p>{vendor_details[4].product_category}</p>
          </div>
          <div className="vendor-detail">
            <h4>phone</h4>
            <span>:</span>
            <p>{vendor_details[5].phone}</p>
          </div>
          <div className="vendor-detail">
            <h4>email</h4>
            <span>:</span>
            <p>{vendor_details[6].email}</p>
          </div>
          <div className="vendor-detail">
            <h4>website</h4>
            <span>:</span>
            <p>{vendor_details[7].website}</p>
          </div>
        </div>
        <Socials />
      </div>
      <div className="vendor-image">
        <div className="image-container">
          <img src={image} alt="vendor image" />
          <div className="gradient-backg"></div>
          <div className="inherited-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
