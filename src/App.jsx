import HeroSection from "./components/Hero/HeroSection";
import Services from "./components/services/services";
import About from "./components/AboutUs/About";
import WhyUs from "./components/WhyUS/WhyUs";
import DiscussProject from "./components/DiscussProjects/DiscussProject";
import Faqs from "./components/FAQs/Faqs";
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection />
        <Services />
        <About />
        <WhyUs />
        <DiscussProject />
        <Faqs />
      </div>
    </>
  );
}

export default App;
