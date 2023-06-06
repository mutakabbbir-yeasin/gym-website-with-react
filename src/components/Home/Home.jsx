// import Header from "../../components/Header/Header";
import FAQs from "../FAQs/FAQs";
import MainHeader from "../MainHeader/MainHeader";
import Program from "../Program/Program";
import Testimonials from "../Testimonials/Testimonials";
import Values from "../Values/Values";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Program />
      <Values />
      <FAQs />
      <Testimonials />
    </div>
  );
};

export default Home;
