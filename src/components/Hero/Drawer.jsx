import React from "react";
import { Link } from "react-scroll";
import { IoCloseSharp } from "react-icons/io5";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`z-30 fixed top-0 right-0 w-[20rem] h-full bg-primary text-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="text-white text-2xl focus:outline-none"
        >
          <IoCloseSharp />
        </button>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
              onClick={onClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
              onClick={onClose}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
              onClick={onClose}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
              onClick={onClose}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
              onClick={onClose}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="FAQs"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
              onClick={onClose}
            >
              FAQs
            </Link>
          </li>

          <li>
            <Link
              to="Contact"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
              onClick={onClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
