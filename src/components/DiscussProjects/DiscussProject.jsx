import { Link } from "react-scroll";

const DiscussProject = () => {
  return (
    <div className="relative container w-screen h-[70vh]  bg-[url('/images/discussBg.jpg')] bg-cover bg-center font-Inter flex flex-col gap-4 justify-center items-center my-6 ">
      <div className="absolute inset-0 bg-black opacity-70 z-10 w-[100%] h-[100%]"></div>
      <div className="relative flex flex-col gap-4 items-center justify-center z-20 ">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white  ">
          Lets Discuss your Projects
        </h3>
        <p className="font-medium text-xs md:text-xl text-white tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <button
          type="button"
          className="text-white font-normal border-white border-2 rounded-full bg-white/30 px-8 py-4 mt-4  hover:bg-primary hover:cursor-pointer hover:border-primary"
        >
          <Link to="contact" smooth={true} duration={400}>
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DiscussProject;
