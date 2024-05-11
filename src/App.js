import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Projects/>

    </div>
  );
}

export default App;
