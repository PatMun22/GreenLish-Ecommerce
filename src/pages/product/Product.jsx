import { singleProducts } from "../../assets/data";
import SingleProduct from "../../components/single/SingleProduct";
import "./product.scss";

const Product = () => {
  return (
    <div>
      <SingleProduct {...singleProducts} />
    </div>
  );
};

export default Product;
