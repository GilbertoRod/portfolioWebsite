import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Footer from "./components/Footer";
function App() {

  useEffect(() => {
    AOS.init({ duration: 1500, once: true, });
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
