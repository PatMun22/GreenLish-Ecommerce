// import { useState } from "react";
import ArticleCard from "../articleCard/ArticleCard";
import "./relatedArticles.scss";

const RelatedArticles = () => {
  //   const [card, setCard] = useState(1);

  let box = document.querySelector(".article-container");

  const btnPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnPressPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <div className="related-articles">
      <button className="pre-btn" onClick={btnPressPrev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnPressNext}>
        <p>&gt;</p>
      </button>

      <div className="article-container">
        <ArticleCard cardNo="1" />
        <ArticleCard cardNo="2" />
        <ArticleCard cardNo="3" />
        <ArticleCard cardNo="4" />
        <ArticleCard cardNo="5" />
        <ArticleCard cardNo="6" />
        <ArticleCard cardNo="7" />
        <ArticleCard cardNo="8" />
        <ArticleCard cardNo="9" />
        <ArticleCard cardNo="10" />
      </div>
    </div>
  );
};

export default RelatedArticles;
