import HeroSection from "./components/Hero/HeroSection";
import Services from "./components/services/services";
import About from "./components/AboutUs/About";
import WhyUs from "./components/WhyUS/WhyUs";
import DiscussProject from "./components/DiscussProjects/DiscussProject";
import Faqs from "./components/FAQs/Faqs";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonials/Testimonial";
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection />
        <Services />
        <About />
        <WhyUs />
        <DiscussProject />
        <Team />
        <Testimonial />
        <Faqs />
        <Contact />
      </div>
    </>
  );
}

export default App;
