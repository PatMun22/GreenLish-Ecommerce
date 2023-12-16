import { useEffect, useState } from "react";
import "./carouselcompnent.scss";
import CarouselItem from "../carouselItem/CarouselItem";

const CarouselComponent = ({ carousels }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const nextSlide = () => {
    setActiveSlideIndex((prevSlideIndex) =>
      prevSlideIndex === carousels.length - 1 ? 0 : prevSlideIndex + 1
    );
  };

  const updateIndex = (newIndex) => {
    newIndex < 0
      ? activeSlideIndex === 0
      : newIndex >= carousels.length
      ? activeSlideIndex === carousels.length - 1
      : setActiveSlideIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeSlideIndex]);

  return (
    <CarouselItem
      updateIndex={updateIndex}
      activeSlideIndex={activeSlideIndex}
      carousels={carousels}
    />
  );
};

export default CarouselComponent;
