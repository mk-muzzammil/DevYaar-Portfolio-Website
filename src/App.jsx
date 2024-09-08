import HeroSection from "./components/Hero/HeroSection";
import Services from "./components/services/services";
import About from "./components/AboutUs/About";
import WhyUs from "./components/WhyUS/WhyUs";
function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <HeroSection />
        <Services />
        <About />
        <WhyUs />
      </div>
    </>
  );
}

export default App;
