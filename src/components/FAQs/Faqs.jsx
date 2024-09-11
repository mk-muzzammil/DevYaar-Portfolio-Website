import { useState } from "react";
import { FaAngleDoubleRight, FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What does the subscription include?",
      answer:
        "You can pay online with confidence, all transactions made on the Mathrix.fr site are 100% secure and ensured by our payment partner Stripe. We pay particular attention to the security of your data: your credit card information is encrypted using the SSL (Secure Socket Layer) protocol and no bank data is stored on our network.",
      isOpen: false,
    },
    {
      question: "What is web domain and hosting?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      isOpen: false,
    },
    {
      question: "Which server is best for windows linux and windows ?",
      answer:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      isOpen: false,
    },
    {
      question: "Why organic SEO is important for all businesses  ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam iste porro, id ratione eos neque itaque assumenda cum incidunt consequuntur provident laudantium quia quae beatae natus. Possimus quo suscipit doloremque.",
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
    <div id="FAQs" className="container w-[90%] mx-auto my-8 font-Inter">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-primary mb-6 uppercase">
          Frequently Asked Questions
        </h2>
        <p className="text-xl  lg:text-2xl text-black max-w-4xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                faq.isOpen ? "text-green-500" : "text-black dark:text-white"
              }`}
            >
              <FaAngleDoubleRight />
              <p className="text-lg font-semibold">{faq.question}</p>
            </div>
            {faq.isOpen ? (
              <div className="text-secondary dark:text-white text-2xl">
                <FaAngleUp />
              </div>
            ) : (
              <div className="text-secondary dark:text-white text-2xl">
                <FaAngleDown />
              </div>
            )}
          </div>
          {faq.isOpen && (
            <div className="p-4 bg-gray-100 dark:bg-primary rounded-sm">
              <p className="text-gray-700 dark:text-white ">{faq.answer}</p>
            </div>
          )}
          <div className="mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
