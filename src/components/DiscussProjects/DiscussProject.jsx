import { Link } from "react-scroll";

const DiscussProject = () => {
  return (
    <div className="relative w-screen h-[500px] sm:h-[400px] md:h-[500px] lg:h-[500px]">
      <img
        className="w-full h-full object-cover"
        src="/images/discussBg.jpg"
        alt="Banner"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-4 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-2 uppercase">
          Let's Discuss your Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <button
          type="button"
          className="text-white font-normal border-white border-2 rounded-full bg-white/30 px-8 py-4 mt-4  hover:bg-primary hover:cursor-pointer hover:border-primary"
        >
          <Link to="Contact" smooth={true} duration={400}>
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DiscussProject;
