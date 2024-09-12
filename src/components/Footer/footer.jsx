import React from "react";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa"; // Make sure to install react-icons
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 sm:px-12 md:px-24 flex flex-col sm:flex-row sm:justify-between items-center">
      <div className="flex items-center mb-4 justify-center sm:justify-start sm:mb-0 sm:order-none w-[40%]">
        <Link to={"home"} duration={400}>
          <img src="/images/logo.png" alt="Logo" className="h-8 mr-4" />
        </Link>
      </div>
      <div className="flex justify-between items-center w-[60%] flex-col-reverse sm:flex-row gap-4">
        <div className="flex flex-col sm:flex-col items-center sm:items-center order-2 sm:order-none">
          <p className="text-sm text-center mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm text-center mb-4 sm:mb-0">
            Powered By DEVYAAR.
          </p>
        </div>
        <div className="flex space-x-4 order-1 sm:order-none">
          <a
            href="https://www.instagram.com/devyaar.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dev-yaar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565335510626"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
