import { Link } from "react-scroll";
import Drawer from "./Drawer";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Toggle from "../Toggle/Toggle";
const HeroSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const heading = "DevYaar";
  const para = "Your Trusted Yaar in Digital Development";
  // #F85A40
  return (
    <>
      <div
        id="home"
        className="relative h-[100vh] w-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center font-Inter overflow-hidden "
      >
        <div className="absolute inset-0 bg-black opacity-70 w-[100%] h-[100%] z-10"></div>
        <nav className="relative flex justify-around p-8 z-20 items-center">
          <div className="font-extrabold text-2xl text-white hover:cursor-pointer flex gap-8 items-center ">
            <Link
              to="home"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
            >
              <img src="/images/logo.png" alt="Logo" className="w-[170px] " />
              {/* <span className="text-primary">Tech</span>Theme */}
            </Link>
            <Toggle />
          </div>
          <div>
            <ul className="flex gap-6 text-red-50 font-semibold hidden lg:flex">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="team"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="FAQs"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="Contact"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleDrawer}
              className="text-primary text-2xl lg:hidden"
            >
              <FaBars />
            </button>
          </div>
        </nav>
        <div className="flex items-center justify-center my-20 py-20 ">
          <div className="relative z-20 flex flex-col gap-4 justify-center items-center  ">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-widest font-light uppercase">
              {heading.split("").map((char, index) => (
                <span
                  key={index}
                  className={`inline-block ${char === " " ? "mx-1" : ""}`}
                  style={{ "--char-index": index }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <p className="text-white  tracking-tight md:tracking-normal text-[1rem] sm:text-2xl md:text-3xl lg:text-4xl font-light mt-4">
              {para.split("").map((char, index) => (
                <span
                  key={index}
                  className={`inline-block ${char === " " ? "mx-1" : ""}`}
                  style={{ "--char-index": index }}
                >
                  {char}
                </span>
              ))}
            </p>
            <p className="text-white/70 text-[0.7rem] sm:text-xl lg:text-2xl  font-light tracking-tight">
              We are a team of professionals who are passionate about what we do
            </p>
            <Link to="services" smooth={true} duration={400}>
              <button
                type="button"
                className="text-white font-normal border-white border-2 rounded-full bg-white/30 px-8 py-4 mt-4  hover:border-gray-500"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
        <section className="wave-container dark:hidden">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
