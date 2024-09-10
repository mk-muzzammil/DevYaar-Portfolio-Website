const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-primary w-screen overflow-hidden font-Inter"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
            About Us
          </h2>
          <p className="text-lg lg:text-xl text-white max-w-4xl mx-auto">
            At DevYaar, we provide high-quality digital solutions designed for small businesses and enterprises. We specialize in web development, mobile app development, web design, and content creation, ensuring seamless user experiences across all mobile devices and web pages. With a strong focus on SEO, we boost your brand’s visibility on search engines and social media platforms. Our team of expert social media marketers, email marketers, and content marketers works in real time to help your brand thrive online. Let DevYaar create a user-friendly and impactful digital presence for your business today!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full max-w-md p-4">
            <div className="bg-white shadow-lg p-8 text-center rounded-lg h-full flex flex-col justify-between">
              <img
                src="/images/mission.png"
                alt="Feature 1"
                className="mx-auto mb-6 w-24 h-24 lg:w-32 lg:h-32"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-black mb-3">
                Our Mission
              </h3>
              <p className="text-black text-base lg:text-lg">
              At DevYaar, our mission is to empower small businesses and enterprises by delivering cutting-edge digital solutions. Through innovative web development, mobile apps, and content creation, we ensure seamless user experiences while boosting brand visibility through effective SEO and social media marketing strategies.
              </p>
            </div>
          </div>
          <div className="w-full max-w-md p-4">
            <div className="bg-white shadow-lg p-8 text-center rounded-lg h-full flex flex-col justify-between">
              <img
                src="/images/vision.png"
                alt="Feature 2"
                className="mx-auto mb-6 w-24 h-24 lg:w-32 lg:h-32"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
              We envision DevYaar as a leader in the digital space, known for developing user-friendly platforms that drive growth and success. Our goal is to stay ahead of the curve in software development, web design, and real-time marketing, helping businesses succeed in an ever-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
