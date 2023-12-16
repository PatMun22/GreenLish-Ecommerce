import "./carouselRight.scss";

const CarouselRight = ({ carousel }) => {
  return (
    <div className="carousel-right">
      <img src={carousel.img} alt={`carousel ${carousel.id}`} loading="lazy" />
    </div>
  );
};

export default CarouselRight;
