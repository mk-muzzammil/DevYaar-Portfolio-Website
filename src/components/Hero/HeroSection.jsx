import { Link, animateScroll as scroll } from "react-scroll";
import Drawer from "./Drawer";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const HeroSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  // #F85A40
  return (
    <>
      <div
        id="home"
        className="relative h-[100vh] w-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center font-Inter "
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <nav className="relative flex justify-around p-8 z-20 items-center">
          <div className="font-extrabold text-2xl text-white hover:cursor-pointer ">
            <Link
              to="home"
              smooth={true}
              duration={400}
              className="hover:cursor-pointer"
            >
              <img src="/images/logo.png" alt="Logo" className="w-[170px] " />
              {/* <span className="text-primary">Tech</span>Theme */}
            </Link>
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
                  to="section1"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="section1"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="section1"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="section1"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="section1"
                  smooth={true}
                  duration={400}
                  className="hover:cursor-pointer hover:border-b-[3px] hover:border-primary hover:pb-2 active:border-b-[3px] active:border-primary active:pb-2 "
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="section1"
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
            <h1 className=" text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-widest font-light uppercase">
              <span className="text-primary ">Dev</span>Yaar
            </h1>
            <p className="text-white font-bold tracking-tight md:tracking-normal text-[1rem] sm:text-2xl md:text-3xl lg:text-4xl font-light mt-4">
              Our business is helping you grow your business
            </p>
            <p className="text-[#B5B6B7] font-[400] tracking-normal text-[0.7rem] sm:text-xl font-light tracking-tight">
              Top Web & Applications Solutions
            </p>

            <button
              type="button"
              className="text-white font-normal border-white border-2 rounded-full bg-white/30 px-8 py-4 mt-4  hover:border-gray-500"
            >
              <Link to="section1" smooth={true} duration={400}>
                Get Started
              </Link>
            </button>
          </div>
        </div>
        <Drawer isOpen={drawerOpen} onClose={toggleDrawer} />
        <section class="wave-container">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
          <div class="wave wave4"></div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
