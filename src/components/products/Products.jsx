import { useState } from "react";
import ProductsButtons from "../productsButtons/ProductsButtons";
import ProductCategory from "../productsCartegory/ProductCategory";
import "./products.scss";
import { recommendedProducts } from "../../assets/data";

const Products = () => {
  const [items, setItems] = useState(recommendedProducts);

  const filterItems = (catItem) => {
    const filtered = recommendedProducts.filter(
      (currItem) => currItem.category.toLowerCase() === catItem.toLowerCase()
    );

    setItems(filtered);
  };

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
