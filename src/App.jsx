import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Plans from "./pages/Plans/Plans";
import Trainers from "./pages/Trainers/Trainers";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </>
  );
}

export default App;
