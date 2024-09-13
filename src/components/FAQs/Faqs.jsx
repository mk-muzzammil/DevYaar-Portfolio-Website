import { useState } from "react";
import { FaAngleDoubleRight, FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What services we offer in Web Development?",
      answer:
        "We offer a comprehensive range of web development services, including custom website design, web application development, e-commerce solutions, and more. Our team of expert web developers and designers collaborate to create user-friendly and visually stunning websites tailored to your business needs. We provide custom Figma wireframe designs on demand for UI finalization and deliver a complete roadmap with a modular breakdown of your website’s architecture. Flexible revisions are available to ensure the final product aligns with your vision. Whether it’s a simple landing page or a complex web application, we have the experience to bring your ideas to life. Contact us today to learn more about how our web development solutions can help grow your business.",
      isOpen: false,
    },
    {
      question:
        "What are benefits for choosing our Digital Marketing Services?",
      answer:
        "Choosing our digital marketing services offers a multitude of benefits. We help businesses reduce costs through optimized strategies and provide a long-term plan designed to sustain market share and foster continued growth. Our experts craft tailored marketing strategies that enhance your brand visibility, drive traffic, and boost conversions across all digital channels, from social media to search engines. By focusing on both short-term goals and a viable long-term approach, we ensure your business remains competitive and adaptable to changing market trends.",
      isOpen: false,
    },
    {
      question: "How many revisions we offer for our services?",
      answer:
        "We offer a generous revision policy to ensure customer satisfaction across all our services : Web Development: Up to 15 revisions for custom web design and development projects. Django Full Stack Development: Up to 12 revisions. WordPress Development: Up to 10 revisions.MERN Stack Development: Up to 12 revisions.Custom Shopify Stores: Up to 8 revisions.App Development: Up to 10 revisions.Digital Marketing: Up to 5 revisions on strategy and campaignadjustments.Content Writing: Up to 7 revisions for refining content as per clientfeedback.Graphics Designing: Up to 10 revisions to perfect visual assets.Video Editing: Up to 8 revisions for finalizing video content.These revision limits ensure we can fine-tune every detail whilekeeping the project on track.",

      isOpen: false,
    },
    {
      question: "What do we offer in Content Writing Services?",
      answer:
        "Our content writing services provide 100% organic, SEO-optimized content tailored to meet search engine standards and user needs. We conduct thorough research beforehand to ensure the content is relevant, engaging, and targeted to your audience. Additionally, we offer a content calendar as an add-on to help you boost your reach and stay consistent with your content marketing efforts. Whether it’s blog posts, website copy, or social media content, we deliver high-quality content designed to rank and engage your audience.",
      isOpen: false,
    },
    // Add more FAQs as needed
  ]);

  const toggleFaq = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div
      id="FAQs"
      className="container p-6 sm:p-4 w-[90%] mx-auto my-8 font-Inter dark:bg-black/90"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className=" text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-primary mb-6 uppercase">
          Frequently Asked Questions
        </h2>
        <p className="text-xl  text-center lg:text-2xl text-black dark:text-white max-w-4xl mb-6">
          Breakdown of our Services
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer p-4 bg-gray-100 dark:bg-primary dark:text-white rounded-sm"
            onClick={() => toggleFaq(index)}
          >
            <div
              className={`flex flex-row items-center gap-4 ${
                faq.isOpen ? "text-primary" : "text-black dark:text-white"
              }`}
            >
              <FaAngleDoubleRight />
              <p className="text-sm sm:text-lg font-semibold">{faq.question}</p>
            </div>
            {faq.isOpen ? (
              <div className="text-secondary dark:text-white text-xl sm:text-2xl">
                <FaAngleUp />
              </div>
            ) : (
              <div className="text-secondary dark:text-white text-xl sm:text-2xl ">
                <FaAngleDown />
              </div>
            )}
          </div>
          {faq.isOpen && (
            <div className="p-4 bg-gray-100 dark:bg-primary rounded-sm">
              <p className="text-gray-700 p-4 dark:text-white ">{faq.answer}</p>
            </div>
          )}
          <div className="mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
