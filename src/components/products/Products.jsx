import ProductsButtons from "../productsButtons/ProductsButtons";
import ProductCategory from "../productsCartegory/ProductCategory";
import "./products.scss";

const Products = () => {
  return (
    <div className="products">
      <ProductsButtons />
      <ProductCategory />
    </div>
  );
};

export default Products;
