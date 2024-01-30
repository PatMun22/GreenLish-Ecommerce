import { useContext, useState } from "react";
import "./productDetailCategorisation.scss";
import { ShopContext } from "../../context/ShopContext";
// import Description from "../description/Description";
// import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import Reviews from "../reviews/Reviews";
// import ShippingDelivery from "../shippingDelivery/ShippingDelivery";
// import Vendor from "../vendor/Vendor";

const ProductDetailCategorisation = () => {
  const { currentPage, setCurrentPage } = useState("description");
  const { product } = useContext(ShopContext);

  const { reviews } = product;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-detail-categorisation">
      <div className="buttons-container">
        <button
          className={`btn ${currentPage ? "active" : ""}`}
          onClick={() => handlePageChange("description")}
        >
          Description
        </button>
        <button
          className={`btn ${currentPage ? "active" : ""}`}
          onClick={() => handlePageChange("additional information")}
        >
          Additional Information
        </button>
        <button
          className={`btn ${currentPage ? "active" : ""}`}
          onClick={() => handlePageChange("reviews")}
        >
          Reviews ({reviews.length})
        </button>
        <button
          className={`btn ${currentPage ? "active" : ""}`}
          onClick={() => handlePageChange("shipping & delivery")}
        >
          Shipping & Delivery
        </button>
        <button
          className={`btn ${currentPage ? "active" : ""}`}
          onClick={() => handlePageChange("vendor")}
        >
          Vendor
        </button>
      </div>
      <Reviews />
    </div>
  );
};

export default ProductDetailCategorisation;
