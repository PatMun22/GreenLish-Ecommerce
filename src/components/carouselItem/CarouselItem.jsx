import "./carouselItem.scss";
import CarouselLeft from "../carouselLeft/CarouselLeft";
import CarouselRight from "../carouselRight/CarouselRight";
import IndicatorButtons from "../indicatorButtons/IndicatorButtons";

const CarouselItem = ({ carousels, updateIndex, activeSlideIndex }) => {
  return (
    <div className="carousel-container">
      <div className="slide-container">
        {carousels.map((carousel, index) => (
          <div
            key={carousel.id}
            className={
              index === activeSlideIndex
                ? "carousel-item active"
                : "carousel-item inactive"
            }
          >
            <CarouselLeft />
            <CarouselRight carousel={carousel} />
          </div>
        ))}
      </div>

      <div className="indicators">
        {carousels.map((carousel, index) => (
          <IndicatorButtons
            key={carousel.img}
            carousel={carousel}
            index={index}
            updateIndex={updateIndex}
            activeSlideIndex={activeSlideIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselItem;
