import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    // Simple regex for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    setEmail(value);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center text-secondary uppercase">
        Contact Us
      </h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-lg  p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-6">
        {/* Contact Information */}
        <div className="bg-black text-white p-6 rounded-lg rounded-br-[80px] md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Address:</h3>
          <p>11 West Town</p>
          <p>PBo 12345, United States</p>

          <h3 className="text-lg font-bold mt-6 mb-4">Phone:</h3>
          <p>+1 1234 56 789</p>
          <p>+1 1234 56 780</p>

          <h3 className="text-lg font-bold mt-6 mb-4">Email:</h3>
          <p>info@example.com</p>
          <p>email@example.com</p>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Name*"
                className="w-full md:w-1/2 p-4 border rounded-lg bg-gray-100 font-medium focus:outline-none text-black rounded-br-[40px]"
              />
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                className={`w-full md:w-1/2 p-4 border rounded-lg bg-gray-100 font-medium focus:outline-none text-black rounded-br-[40px] ${
                  emailError ? "border-red-500" : ""
                }`}
              />
              {emailError && (
                <p className="text-red-500 text-xs md:text-sm">{emailError}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border rounded-lg bg-gray-100 font-medium focus:outline-none text-black rounded-br-[40px]"
            />
            <textarea
              placeholder="Write Your Message*"
              className="w-full p-4 h-40 border rounded-lg bg-gray-100 font-medium focus:outline-none text-black rounded-br-[40px]"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 md:px-12 rounded-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
