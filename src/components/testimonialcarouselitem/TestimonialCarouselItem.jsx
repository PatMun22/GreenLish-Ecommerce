import { useEffect, useState } from "react";
import "./testimonialCarouselItem.scss";
import { FaStar } from "react-icons/fa";
import { IoMdRadioButtonOn } from "react-icons/io";
import { testimonials } from "../../assets/data";

const TestimonialCarouselItem = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const updateIndex = (newIndex) => {
    newIndex < 0
      ? currentSlide === 0
      : newIndex >= totalSlides
      ? currentSlide === totalSlides - 2
      : setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <div className="carousel-item">
      {testimonials.map((item) => (
        <div
          className={`slide ${currentSlide === 0 ? "active" : ""} ${
            currentSlide === totalSlides - 2 ? "second" : ""
          }`}
          key={item.id}
        >
          <h3>{item.name}</h3>
          <p>{item.profession}</p>
          <div className="testimonial-ratings">
            <FaStar className="testimonial-rating" />
            <FaStar className="testimonial-rating" />
            <FaStar className="testimonial-rating" />
            <FaStar className="testimonial-rating" />
            <FaStar className="testimonial-rating" />
          </div>
          <blockquote>&quot;{item.comment}&quot;</blockquote>
          <div className="image">
            <img src={item.image} alt="" loading="lazy" />
          </div>
        </div>
      ))}

      <div className="testimonial-buttons">
        {testimonials.map((item, index) => (
          <IoMdRadioButtonOn
            className="car-btn"
            style={{
              color: index === currentSlide ? "#121935" : "#738678",
            }}
            key={item.id}
            onClick={() => {
              updateIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarouselItem;
