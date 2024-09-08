import { FaAngleDoubleRight } from "react-icons/fa";

const WhyUs = () => {
  let skills = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Shopify Development" },
    { id: 3, name: "Wordpress Development" },
    { id: 4, name: "MERN Stack Development" },
    { id: 5, name: "App Development" },
    { id: 6, name: "Digital Marketing" },
    { id: 7, name: "Content Writing" },
    { id: 8, name: "Graphics Designing" },
    { id: 9, name: "Video Editting" },
  ];

  return (
    <>
      <div
        id="WhyUs"
        className="flex flex-col gap-6 items-center my-8 font-Inter "
      >
        <h1 className="text-4xl lg:text-5xl text-secondary font-bold">
          Why Us
        </h1>
        <p className="text-xl tracking-wide font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className="flex flex-col lg:flex-row justify-around w-[90%]">
          <div className="lg:w-[50%] p-4 lg:p-6">
            <div className="flex flex-col gap-4  ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              {skills.map((skill) => {
                return (
                  <div key={skill.id} className="flex items-center gap-2">
                    <div className="h-4 w-4 text-primary">
                      <FaAngleDoubleRight />
                    </div>
                    <p>{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-[50%] p-4 lg:p-6 self-center">
            <img
              className="sm:w-[500px]"
              src="/images/WhyUs.png"
              alt="Why Us Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
