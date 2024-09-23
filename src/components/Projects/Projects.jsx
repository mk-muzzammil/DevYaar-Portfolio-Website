import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFilter } from "react-icons/fa"; // Importing filter icon

// Project categories and project details
const projects = [
  {
    category: "Web Dev",
    image: "/images/img1.png",
    title: "Elibrary Dashboard Web App",
    description:
      "This project focuses on building a robust web application with several key features. The backend is developed using Node.js, Express.js, and MongoDB, with API endpoints tested through Postman. The frontend utilizes Next.js and Tailwind CSS, offering a dynamic eLibrary that displays detailed book descriptions. An Admin Dashboard, built in React.js, allows full control over book management, including creating, editing, deleting, and reading, with integrated authentication and authorization. Cloudinary is used for managing book PDFs and images, and features like pagination, bookmarking, and caching are efficiently handled.",
    githubLink: "https://github.com/mk-muzzammil/MERN-E-Book-Backend.git",
  },
  {
    category: "Web Dev",
    image: "/images/img2.png",
    title: "Game Zone Ecomerce App",
    description:
      "This project highlights several advanced backend development features. It includes secure user authentication and authorization, managing roles, permissions, and logins. Input validation is implemented on both client and server sides to ensure data integrity. The project integrates Cloudinary for image uploading, processing, and secure storage, along with dynamic PDF generation for invoices and reports. It also employs CSRF protection and session management for enhanced security. EJS templates are used for dynamic front-end rendering, and MongoDB provides scalable and efficient data storage with a flexible schema design.",
    githubLink:
      "https://github.com/mk-muzzammil/Gaming-Ecomerce-Website-MERN-Project.git",
  },
  {
    category: "Web Dev",
    image: "/images/img3.png",
    title: "Challenge Habit App",
    description:
      "This project is the result of my internship at Ozeito, where I developed a multi-page website for the company. The frontend is designed to provide a user-friendly experience, showcasing services, company culture, and what makes Ozeito unique. You can explore the project here: Project Link. I'm proud to have contributed to Ozeito's digital presence and appreciate any feedback.",
    githubLink:
      "https://github.com/mk-muzzammil/Challenges-Habit-App-Using-HTML-CSS-JS-.git",
  },
  {
    category: "Web Dev",
    image: "/images/img4.png",
    title: "Study Giene App",
    description:
      "Study Gene App This web application, the Study Gene App, is designed to provide a comprehensive educational experience for students. It incorporates features such as navigation, user authentication, mobile responsiveness, and sections for learning, testimonials, tutorials, subscription plans, and more",
    githubLink:
      "https://github.com/mk-muzzammil/Study-Giene-School-Website-Frontend-design.git",
  },
  {
    category: "Web Dev",
    image: "/images/img5.jpg",
    title: "3D Animated iPhone Showcase with Three.js, React,and GSAP",
    description:
      "This project demonstrates a stunning 3D animated website built using React, Three.js, and GSAP. It features a rotating, interactive 3D model of an iPhone, bringing a dynamic and visually captivating experience to the user. With the help of Three.js for 3D rendering, Drei for simplified 3D components, and GSAP for smooth animations, this website provides an immersive and responsive design perfect for product showcases or tech-based applications. The animation flows seamlessly as users interact, highlighting the iPhone’s details and functionality.",
    githubLink: "https://github.com/thatisawais/3d-Iphone-model-Website",
  },
  {
    category: "Web Dev",
    image: "/images/img6.jpg",
    title:
      "Weather Application Dashboard for ACTIVE (Funded by European Union)",
    description:
      "This project is a Weather Dashboard Application designed to display real-time and historical weather data from a weather station connected to a Misol tablet. The data is fetched and stored in MongoDB and visualized through interactive charts. The dashboard includes features like current weather conditions, historical data trends, and predictions based on machine learning models.",
    githubLink: "https://github.com/MuhammadBinSikandar/WeatherApp",
  },
  {
    category: "Web Dev",
    image: "/images/img7.png",
    title:
      "Build the foundations for a Software as a Service business by leveraging Django, Tailwind, htmx, Neon Postgres, Redis, and more.",
    description:
      "The goal of this project is to learn how to create a reusable foundation for building SaaS products. When release, this course will span multiple topics and give you a solid foundation into build your business.",
    githubLink: "https://github.com/MuhammadBinSikandar/SAAS_PLATFORM",
  },
  {
    category: "Content Writing",
    image: "/images/img8.png",
    title: "Node js promise (GhostWritten).",
    description:
      "Promises in Node.js are an enhanced version of callbacks that allow handling the code flow asynchronously as javascript is a synchronous language.",
    githubLink: "https://linuxhint.com/node-js-promise/",
  },
  {
    category: "Content Writing",
    image: "/images/img9.png",
    title: "Node.js Send Email",
    description:
      " To send an email in Node.js there are multiple ways and the most common are using an SMTP server or using the API of an email service provider.",
    githubLink: "https://linuxhint.com/nodejs-send-email/",
  },
  {
    category: "Content Writing",
    image: "/images/img10.png",
    title: "Title: WebSockets node js",
    description:
      " WebSockets in Node.js are a two-way gateway for real-time communication, and they provide better connectivity over conventional HTTP protocol.",
    githubLink: "https://linuxhint.com/websockets-node-js/",
  },
  {
    category: "Content Writing",
    image: "/images/img11.png",
    title: "VirtualBox vs Hyper-V vs VMware | Detailed Comparison",
    description:
      " Hyper-V is great for Windows-based OS, VirtualBox is versatile and free, and VMware is more scalable and optimal and is used in larger organizations.",
    githubLink:
      "https://linuxhint.com/virtualbox-vs-hyper-vs-vmware-detailed-comparison/",
  },
  {
    category: "UI/UX",
    image: "/images/img12.jpg",
    title: "Dashboard Web Design ",
    description:
      "This is a web deisgned for a dashboard. It is designed using figma. It is a simple and clean design.",
    githubLink:
      "https://www.figma.com/proto/EV2XCeKAoxSWh9oiozLqC6/Untitled?t=qkjMwrHegOmzAdba-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2",
  },
  {
    category: "UI/UX",
    image: "/images/img13.jpg",
    title: "Dashboard Web Design",
    description:
      " Amazing Dashboard Web Design. It is designed using figma. It is a simple and clean design.",
    githubLink:
      "https://www.figma.com/proto/RDonboZ7R0XLfNBMcmCXTh/Untitled?t=qkjMwrHegOmzAdba-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=0-1 ",
  },
  {
    category: "Mobile App Development",
    image: "/images/img14.png",
    title: "Instagram Clone ",
    description:
      " This is an amazing instagram clone app.its is developed in flutter and firebase. It is a simple and clean design.",
    githubLink: "https://github.com/AliHere76/Instagram-UI-Clone-Flutter.git ",
  },
  {
    category: "Mobile App Development",
    image: "/images/img15.png",
    title: "MQTT Communication App",
    description:
      "This is an amazing app for communication. It is developed in flutter and MQTT. It is a simple and clean design.",
    githubLink: "https://github.com/AliHere76/Flutter-MQTT-Communication-App ",
  },
  {
    category: "Video Editing",
    image: "/images/img16.png",
    title: "Camera Info",
    description:
      "This reel crafted in Premiere Pro contains information regarding photo and video cameras and the TAX duties imposed on them..",
    githubLink: "https://www.behance.net/gallery/208535943/Camera-Info",
  },
  {
    category: "Video Editing",
    image: "/images/img17.png",
    title: "Care Cast",
    description:
      "This video encapsulates the essence of PG's podcasting journey, showcasing snippets of lively discussions, thought-provoking debates, and spontaneous moments.",
    githubLink: "https://www.behance.net/gallery/208535749/Carcast ",
  },
  {
    category: "Video Editing",
    image: "/images/img18.png",
    title: "Skoon Ki Zindagi",
    description:
      "This video animation shows the hardships a student goes in order to achieve 'Sakoon ki Zindagi' in a modern day university life.",
    githubLink: "https://www.behance.net/gallery/208535491/Sakoon-ki-Zindagi ",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Web Dev",
  "UI/UX",
  "Mobile App Development",
  "Video Editing",
  "Digital Marketing",
  "Content Writing",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false); // Manage filter menu visibility

  // Function to filter projects based on category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsFilterMenuOpen(false); // Close the filter menu after selection
  };

  return (
    <div className="flex flex-col items-center justify-center" id="Portfolio">
      <span className="text-4xl lg:text-5xl font-bold text-secondary dark:text-primary mb-6 uppercase">
        Recent Projects
      </span>
      <span className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
        Portfolio
      </span>

      {/* Desktop Category Tabs */}
      <div className="hidden md:flex justify-center space-x-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-primary/80 transition`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6">
        <button
          className="px-4 py-2 bg-primary text-white rounded-lg flex items-center space-x-2"
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
        >
          <FaFilter /> <span>Filter Projects</span>
        </button>
      </div>

      {/* Mobile Filter Menu */}
      {isFilterMenuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center space-y-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`w-full text-center px-4 py-2 rounded-lg ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-primary transition`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <div className="flex justify-center items-center text-primary text-3xl md:text-4xl lg:text-5xl h-[50vh] ">
          Coming Soon ...
        </div>
      )}

      {/* Swiper to display projects */}
      {filteredProjects.length > 0 && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1} // Show only 1 slide per view, but adjust with breakpoints
          grabCursor={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="portfolio-slider w-full my-12 pb-12"
          breakpoints={{
            640: { slidesPerView: 1 }, // Ensure only 1 card per view on mobile screens
            768: { slidesPerView: 2 },
          }}
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="relative group flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-white transition-all duration-300 w-full md:w-[80vw] h-[60vh]" // Ensure the card width is 100% on mobile and adjusted on larger screens
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Blackish Overlay - Only on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4 p-4">
                {/* Fade-up content */}
                <span className="text-white text-xl font-bold transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.title}
                </span>
                <p className="text-white text-sm text-center transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.description}
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  {project.category === "Content Writing"
                    ? "Read More"
                    : " View Project"}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Projects;
