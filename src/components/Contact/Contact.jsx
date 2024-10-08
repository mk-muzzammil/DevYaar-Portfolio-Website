import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || !email || !message || !name) {
      return alert("Please fix errors and fill all required fields.");
    }

    const templateParams = {
      email: email, // sender's email
      name: name,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSuccessMessage("Email sent successfully!");

        setEmail("");
        setSubject("");
        setMessage("");
        setName(""); // Clear name field properly
      })
      .catch((err) => {
        console.error("Failed to send email.", err);
        setSuccessMessage("Failed to send email, please try again.");
      });
  };

  return (
    <div
      id="Contact"
      className="flex flex-col items-center py-12 px-4 md:px-12 lg:px-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center text-secondary uppercase dark:text-primary">
        Contact Us
      </h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-lg p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-black dark:bg-primary text-white p-6 rounded-lg rounded-br-[80px] md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Address:</h3>
          <p>Islamabad</p>
          <p>Pakistan</p>

          <h3 className="text-lg font-bold mt-6 mb-4">Phone:</h3>
          <p>+92-319-7280131</p>
          <p>+92-301-3514508</p>

          <h3 className="text-lg font-bold mt-6 mb-4">Email:</h3>
          <p>devyaarofficial@gmail.com</p>
        </div>

        <div className="md:w-2/3">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full md:w-1/2 p-4 border rounded-lg bg-gray-100 dark:bg-transparent dark:border-primary dark:text-white font-medium focus:outline-none text-black rounded-br-[40px]"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                className={`w-full md:w-1/2 p-4 border rounded-lg bg-gray-100 dark:bg-transparent dark:border-primary dark:text-white font-medium focus:outline-none text-black rounded-br-[40px] ${
                  emailError ? "border-red-500" : ""
                }`}
                required
              />
              {emailError && (
                <p className="text-red-500 text-xs md:text-sm">{emailError}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-100  dark:bg-transparent dark:border-primary dark:text-white font-medium focus:outline-none text-black rounded-br-[40px]"
            />
            <textarea
              placeholder="Write Your Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 h-40 border rounded-lg bg-gray-100  dark:bg-transparent dark:border-primary dark:text-white font-medium focus:outline-none text-black rounded-br-[40px]"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 md:px-12 rounded-full"
            >
              Send Message
            </button>
            {successMessage && (
              <p className="text-green-500 text-center mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
