import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = ({ path, title, description }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="flex flex-col items-center gap-2 w-[350px] h-[450px] p-2 rounded-br-[6rem] rounded-xl  shadow-xl  hover:bg-primary hover:text-white text-black dark:text-white dark:bg-primary dark:hover:bg-primary/90 transition-all duration-300">
        <div className="w-[150px] p-4 bg-transparent rounded-sm rounded-br-[3rem] ">
          <img src={path} alt={title} />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <h1 className="text-center font-bold text-xl  ">{title}</h1>
          <p className=" text-xl p-2 tracking-tight text-center sm:self-start">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
