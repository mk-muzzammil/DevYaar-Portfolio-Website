import Service from "./service";
const Services = () => {
  let services = [
    {
      id: 1,
      path: "/images/web.png",
      title: "Web Development",
      description:
        "DevYaar offers high-quality web development, design, and custom web apps for businesses of all sizes, ensuring responsive, animated and dynamic websites.",
    },
    {
      id: 2,
      path: "/images/App.png",
      title: "App Development",
      description:
        "DevYaar develops high-performance mobile apps tailored to your business needs, delivering seamless user experiences across iOS and Android.",
    },
    {
      id: 3,
      title: "Digital Marketing",
      path: "/images/Marketing.png",
      description:
        "Boost your online presence with DevYaar’s digital marketing solutions, designed to drive traffic, increase visibility, and grow your brand.",
    },
    {
      id: 4,
      title: "Content Writing",
      path: "/images/ContentWritting.png",
      description:
        "DevYaar provides high-quality content creation for websites, blogs, and social media to engage audiences and drive results.",
    },
    {
      id: 5,
      title: "Video Editing",
      path: "/images/VideoEditing.png",
      description:
        "Transform your footage with DevYaar’s professional video editing services, delivering polished, engaging videos for any platform.",
    },
    {
      id: 6,
      title: "Graphic Design",
      path: "/images/graphic.png",
      description:
        "Our graphic design services create impactful visuals, from logos to marketing materials, that captivate and communicate your brand's message.",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="mt-2 mb-8 p-4 bg-white font-Inter overflow-hidden"
      >
        <h1 className="text-4xl lg:text-5xl text-center text-secondary  font-bold tracking-wide mb-8 uppercase">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 place-items-center gap-8 text-start">
          {services.map((service) => {
            return (
              <Service
                key={service.id}
                path={service.path}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
