import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="about"
      className="py-10 px-6 sm:px-4 bg-primary dark:bg-primary dark:text-white w-screen overflow-hidden font-Inter"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6 uppercase">
            About Us
          </h2>
          <p className="text-lg sm:text-xl capitalize lg:text-2xl text-white/70 max-w-4xl mx-auto">
            Welcome to DevYaarn, where we are committed to delivering
            high-quality solutions tailored to meet your unique needs. Our team
            of experts combines years of experience with innovative thinking to
            provide services that help you achieve your goals. Whether you're
            looking for cutting-edge technology or creative design, we've got
            you covered.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full max-w-md p-4">
            <div data-aos="fade-down" className="bg-white shadow-lg p-8 text-center rounded-lg h-full flex flex-col justify-between dark:bg-white ">
              <img
                src="/images/mission.png"
                alt="Feature 1"
                className="mx-auto mb-6 w-24 h-24 lg:w-32 lg:h-32"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-black mb-3 dark:text-black">
                Our Mission
              </h3>
              <p className="text-black text-base lg:text-lg dark:text-black">
                To provide the best solutions that empower businesses to succeed
                in a competitive market.
              </p>
            </div>
          </div>
          <div className="w-full max-w-md p-4">
            <div data-aos="fade-down" className="bg-white shadow-lg p-8 text-center rounded-lg h-full flex flex-col justify-between dark:bg-white dark:text-black">
              <img
                src="/images/vision.png"
                alt="Feature 2"
                className="mx-auto mb-6 w-24 h-24 lg:w-32 lg:h-32"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 dark:text-black">
                Our Vision
              </h3>
              <p className="text-gray-600 text-base lg:text-lg dark:text-black">
                To be the leading provider of innovative and sustainable
                solutions that drive growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
