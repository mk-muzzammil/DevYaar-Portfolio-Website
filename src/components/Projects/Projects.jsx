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
    description: "This is an eLibrary dashboard web app built with React.",
    githubLink: "https://github.com/user/elibrary-dashboard-web-app",
  },
  {
    category: "Web Dev",
    image: "/images/img2.png",
    title: "Game Zone Ecomerce App",
    description: "This is a game zone eCommerce app built with React.",
    githubLink: "https://github.com/user/game-zone-ecommerce-app",
  },
  {
    category: "Web Dev",
    image: "/images/img3.png",
    title: "Challenge Habit App",
    description:
      "An app that helps users build strong habits through challenges.",
    githubLink: "https://github.com/user/challenge-habit-app",
  },
  {
    category: "Web Dev",
    image: "/images/img4.png",
    title: "Study Giene App",
    description:
      "An app that assists students in managing their study routines.",
    githubLink: "https://github.com/user/study-giene-app",
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
        <div className="flex justify-center items-center text-black text-2xl md:text-3xl lg:text-4xl h-[50vh] ">
          No projects available in this category.
        </div>
      )}

      {/* Swiper to display projects */}
      {filteredProjects.length > 0 && (
        <Swiper
          spaceBetween={30}
          slidesPerView={2} // Show only 1 slide per view, but adjust with breakpoints
          grabCursor={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="portfolio-slider w-full my-12 pb-12"
          breakpoints={{
            640: { slidesPerView: 1 }, // Ensure only 1 card per view on mobile screens
            768: { slidesPerView: filteredProjects.length === 1 ? 2 : 2 }, // Show 2 slides on tablet and up, 1 slide if only one project
          }}
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="project-card relative group flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-white transition-all duration-300 w-full md:w-[45vw] h-[60vh]" // Ensure the card width is 100% on mobile and adjusted on larger screens
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
                  View on GitHub
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
