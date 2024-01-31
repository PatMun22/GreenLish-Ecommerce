import { useContext } from "react";
import "./productDetailCategorisation.scss";
import { ShopContext } from "../../context/ShopContext";
import Description from "../description/Description";
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import Reviews from "../reviews/Reviews";
import ShippingDelivery from "../shippingDelivery/ShippingDelivery";
import Vendor from "../vendor/Vendor";
import RelatedProducts from "../relatedProducts/RelatedProducts";

const ProductDetailCategorisation = () => {
  const { product, currentView, setCurrentView } = useContext(ShopContext);

  const { reviews } = product;

  return (
    <div className="product-detail-categorisation">
      <div className="buttons-container">
        <button
          className={`page-btn ${
            currentView === "description" ? "active-btn" : ""
          }`}
          onClick={() => setCurrentView("description")}
        >
          Description
        </button>
        <button
          className={`page-btn ${
            currentView === "additional" ? "active-btn" : ""
          }`}
          onClick={() => setCurrentView("additional")}
        >
          Additional Information
        </button>
        <button
          className={`page-btn ${
            currentView === "reviews" ? "active-btn" : ""
          }`}
          onClick={() => setCurrentView("reviews")}
        >
          Reviews ({reviews.length})
        </button>
        <button
          className={`page-btn ${
            currentView === "shipping" ? "active-btn" : ""
          }`}
          onClick={() => setCurrentView("shipping")}
        >
          Shipping & Delivery
        </button>
        <button
          className={`page-btn ${currentView === "vendor" ? "active-btn" : ""}`}
          onClick={() => setCurrentView("vendor")}
        >
          Vendor Info
        </button>
      </div>
      <div className="page-container">
        {currentView === "description" && <Description />}
        {currentView === "additional" && <AdditionalInformation />}
        {currentView === "reviews" && <Reviews />}
        {currentView === "shipping" && <ShippingDelivery />}
        {currentView === "vendor" && <Vendor />}
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetailCategorisation;
