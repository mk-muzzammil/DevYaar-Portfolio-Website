import Service from "./service";
const Services = () => {
  let services = [
    {
      id: 1,
      path: "/images/service.png",
      title: "Web Development",
      description:
        "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    },
    {
      id: 2,
      path: "/images/service.png",
      title: "Graphic Design",
      description:
        "We deliver eye-catching, memorable experiences that connect with people, just like you.",
    },
    {
      id: 3,
      title: "Digital Marketing",
      path: "/images/service.png",
      description:
        "Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.",
    },
    {
      id: 4,
      title: "Content Creation",
      path: "/images/service.png",
      description:
        "Content creation is the contribution of information to any media and most especially to digital media for an end-user/audience in specific contexts.",
    },
    {
      id: 5,
      title: "SEO",
      path: "/images/service.png",
      description:
        "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
    },
    {
      id: 6,
      title: "App Development",
      path: "/images/service.png",
      description:
        "App development is the process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
    },
  ];

  return (
    <>
      <section id="services" className="mt-12 mb-8 p-4 ">
        <h1 className="text-3xl text-center text-black/70  font-bold tracking-wide mb-8">
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
