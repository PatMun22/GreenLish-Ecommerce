import Hero from "../../components/hero/Hero";
import { carousels } from "../../assets/data";

const Home = () => {
  return (
    <div className="home">
      <Hero carousels={carousels} />
    </div>
  );
};

export default Home;
