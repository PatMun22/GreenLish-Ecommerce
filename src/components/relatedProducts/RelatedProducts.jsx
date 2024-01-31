import { useContext } from "react";
import "./relatedProducts.scss";
import { ShopContext } from "../../context/ShopContext";
import { recommendedProducts } from "../../assets/data";
import ProductItem from "../productItem/ProductItem";

const RelatedProducts = () => {
  const { product } = useContext(ShopContext);

  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <div className="related-products-container">
        {recommendedProducts
          .filter(
            (item) =>
              item.category.toLowerCase() === product.category.toLowerCase()
          )
          .slice(0, 12)
          .map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
