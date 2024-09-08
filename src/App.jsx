import HeroSection from "./components/Hero/HeroSection";
import Services from "./components/services/services";
import About from "./components/AboutUs/About";
function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <HeroSection />
        <Services />
        <About />
      </div>
    </>
  );
}

export default App;
