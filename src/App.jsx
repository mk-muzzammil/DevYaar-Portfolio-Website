import HeroSection from "./components/Hero/HeroSection";
import Services from "./components/services/services";
import About from "./components/AboutUs/About";
import WhyUs from "./components/WhyUS/WhyUs";
import DiscussProject from "./components/DiscussProjects/DiscussProject";
function App() {
  return (
    <>
      <div className="">
        <HeroSection />
        <Services />
        <About />
        <WhyUs />
        <DiscussProject />
      </div>
    </>
  );
}

export default App;
