import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const teamMembers = [
    {
      name: "Muhammad Muzzammil",
      role: "Website Developer",
      image: "/images/team.jpg",
      LinkedIn: "https://www.linkedin.com/in/mk-muzzammil/",
      Github: "https://github.com/mk-muzzammil",
    },
    {
      name: "Muhammad Awais",
      role: "Web and UiUx",
      image: "/images/team.jpg",
      LinkedIn: "https://www.linkedin.com/in/thatisawais/",
      Github: "https://github.com/thatisawais",
    },
    {
      name: "Muhammad Ali",
      role: "App Developer And Video Editer",
      image: "/images/team.jpg",
      LinkedIn: "https://www.linkedin.com/in/muhammad-ali-4755ab276",
      Github: "https://github.com/AliHere76",
    },
    {
      name: "Muhammad Bin Sikandar",
      role: "Django Full-Stack Developer & Digital Marketer",
      image: "/images/team.jpg",
      LinkedIn: "https://www.linkedin.com/in/muhammad-bin-sikandar-2981712b9/",
      Github: "https://github.com/MuhammadBinSikandar",
    },
  ];

  return (
    <section id="team" className="py-12">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl font-bold uppercase text-secondary dark:text-primary">
          Our Team
        </h2>
        <p className="text-gray-500 mt-2 text-center  text-xl sm:text-xl lg:text-2xl capitalize dark:text-white/70">
          Meet the Experts Behind Your Success
        </p>
      </div>
      <div data-aos="flip-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="relative flex flex-col gap-4 items-center p-4 rounded-sm  "
          >
            <div className="absolute left-[11%] sm:left-[8%] lg:left-[-4%] top-[10%]  text-gray-500 dark:text-gray-400 flex flex-col gap-2">
              <a href={member.LinkedIn} className="hover:text-primary">
                <span className=" text-2xl">
                  <AiOutlineLinkedin />
                </span>
              </a>
              <a href={member.Github} className="hover:text-primary">
                <span className="text-2xl">
                  <VscGithub />
                </span>
              </a>
            </div>
            <img
              src={member.image}
              alt={member.name}
              className="w-100 h-80 rounded-sm rounded-br-[3.5rem] mb-4 object-cover"
            />

            <h3 className="text-2xl font-bold text-center break-words text-black dark:text-white/90">
              {member.name}
            </h3>
            <p className="text-gray-500 text-[1rem] break-words text-center dark:text-white/70">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
