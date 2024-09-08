import Service from "./service";
const Services = () => {
  let services = [
    {
      id: 1,
      path: "/images/web.png",
      title: "Web Development",
      description:
        "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    },
    {
      id: 2,
      path: "/images/App.png",
      title: "Graphic Design",
      description:
        "We deliver eye-catching, memorable experiences that connect with people, just like you.",
    },
    {
      id: 3,
      title: "Digital Marketing",
      path: "/images/Marketing.png",
      description:
        "Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.",
    },
    {
      id: 4,
      title: "Content Creation",
      path: "/images/ContentWritting.png",
      description:
        "Content creation is the contribution of information to any media and most especially to digital media for an end-user/audience in specific contexts.",
    },
    {
      id: 5,
      title: "Video Editing",
      path: "/images/VideoEditing.png",
      description:
        "Video editing is the manipulation and arrangement of video shots. Video editing is used to structure and present all video information, including films and television shows, video advertisements and video essays.",
    },
    {
      id: 6,
      title: "Graphic Design",
      path: "/images/graphic.png",
      description:
        "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users'.",
    },
  ];

  return (
    <>
      <section id="services" className="mt-2 mb-8 p-4 bg-white font-Inter">
        <h1 className="text-4xl lg:text-5xl text-center text-secondary  font-bold tracking-wide mb-8">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 place-items-center gap-8">
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
