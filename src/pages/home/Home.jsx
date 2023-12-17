import Hero from "../../components/hero/Hero";
import { carousels } from "../../assets/data";
import HomeBottom from "../../components/homebottom/HomeBottom";

const Home = () => {
  return (
    <div className="home">
      <Hero carousels={carousels} />
      <HomeBottom />
    </div>
  );
};

export default Home;
