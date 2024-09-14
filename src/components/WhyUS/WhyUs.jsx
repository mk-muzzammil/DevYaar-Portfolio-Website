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
    { id: 10, name: "Django Full Stack Development" },
  ];

  return (
    <>
      <div
        id="WhyUs"
        className="flex flex-col gap-6 items-center my-8 font-Inter overflow-hidden p-6 sm:p-4"
      >
        <h1 className="text-2xl sm:text-4xl text-center  lg:text-5xl  text-secondary font-bold uppercase dark:text-primary">
          Why Choose DevYaar?
        </h1>
        <p className="text-xl  sm:text-xl text-center text-white/70  lg:text-2xl capitalize tracking-wide font-medium p-4">
          Partner with Us for Digital Excellence
        </p>
        <div className="flex flex-col lg:flex-row justify-around ">
          <div className="lg:w-[50%] p-4 lg:p-6">
            <div className="flex flex-col gap-4  ">
              <p>
                At DevYaar, we bring together a talented team of software
                developers, computer programmers, web designers, and app
                developers to deliver top-notch digital solutions. Our expertise
                in website creation and code development ensures seamless,
                innovative results tailored to your business needs. Whether
                you're looking to build a custom website, develop an app, or
                streamline your digital strategy, our skilled team is here to
                bring your vision to life with precision and professionalism.
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
