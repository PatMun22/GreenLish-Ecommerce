import CarouselComponent from "../carouselComponent/CarouselComponent";
import "./hero.scss";

const Hero = ({ carousels }) => {
  return (
    <div className="hero" style={{ width: "100%" }}>
      <CarouselComponent carousels={carousels} />
    </div>
  );
};

export default Hero;
