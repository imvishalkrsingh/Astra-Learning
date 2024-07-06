import Hero from "./components/Hero";
import UseCase from "./components/UseCase";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Rnd from "./components/Rnd";
import Team from "./components/Team";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="component_aligner">
      {/* <Navbar/> */}
      <Hero/>
      <UseCase />
      <Benefits/>
      <About />
      <Rnd />
      <Team/>
      <Contact/>
      {/* <Footer/> */}
    </div>  
  )
}

export default Home;
