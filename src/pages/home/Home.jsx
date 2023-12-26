import Hero from "../../components/hero/Hero";
import { carousels } from "../../assets/data";
import HomeBottom from "../../components/homebottom/HomeBottom";
import Testimonials from "../../components/testimonials/Testimonials";
import Blog from "../../components/blog/Blog";
import Partners from "../../components/partners/Partners";

const Home = () => {
  return (
    <div className="home">
      <Hero carousels={carousels} />
      <HomeBottom />
      <Testimonials />
      <Blog />
      <Partners />
    </div>
  );
};

export default Home;
