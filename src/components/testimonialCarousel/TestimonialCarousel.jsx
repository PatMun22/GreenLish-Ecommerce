import TestimonialCarouselItem from "../testimonialcarouselitem/TestimonialCarouselItem";
import "./testimonialCarousel.scss";

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      <h2>
        What Our <br />
        Customers Say
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Suscipit dignissimos consequatur ut voluptatibus reiciendis optio!
      </p>
      <TestimonialCarouselItem />
    </div>
  );
};

export default TestimonialCarousel;
