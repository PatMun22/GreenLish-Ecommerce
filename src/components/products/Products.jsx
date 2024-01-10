import { useContext } from "react";
import ProductsButtons from "../productsButtons/ProductsButtons";
import ProductCategory from "../productsCartegory/ProductCategory";
import "./products.scss";
import { ShopContext } from "../../context/ShopContext";

const Products = () => {
  const { filterItems, items, setItems, recommendedProducts } =
    useContext(ShopContext);

  return (
    <div className="products">
      <ProductsButtons
        filterItems={filterItems}
        recommendedProducts={recommendedProducts}
        setItems={setItems}
      />
      <ProductCategory items={items} />
    </div>
  );
};

export default Products;
