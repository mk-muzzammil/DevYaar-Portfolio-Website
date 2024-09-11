import React, { useEffect, useState } from "react";

const TestimonialCard = ({ name, position, image, rating, feedback }) => {
  return (
    <div className="bg-primary shadow-md rounded-md rounded-br-[4rem] p-6 flex flex-col max-w-xs">
      <div className="flex justify-start items-center gap-4">
        <img src={image} alt={name} className="w-20 h-20 rounded-full" />
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-white">{position}</p>
          <div className="flex justify-start">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-yellow-500">
                  &#9733;
                </span>
              ))}
          </div>
        </div>
      </div>
      <p className="text-white mt-4 text-center">{feedback}</p>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      name: "Fizzi Brandon",
      position: "Freelancer",
      image: "/images/team.jpg", // Replace with actual image path
      rating: 5,
      feedback:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit dolore.",
    },
    {
      name: "Jhone Doe",
      position: "CFO",
      image: "/images/team.jpg", // Replace with actual image path
      rating: 5,
      feedback:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitor entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    },
    {
      name: "Afa Rose",
      position: "Web Designer",
      image: "/images/team.jpg", // Replace with actual image path
      rating: 5,
      feedback:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet.",
    },
    {
      name: "John Smith",
      position: "Software Engineer",
      image: "/images/team.jpg", // Replace with actual image path
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Handle number of cards to show based on screen size
  const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(3); // Large screens
    } else if (window.innerWidth >= 768) {
      setCardsToShow(2); // Medium screens
    } else {
      setCardsToShow(1); // Small screens
    }
  };

  useEffect(() => {
    updateCardsToShow(); // Set initial value based on screen size
    window.addEventListener("resize", updateCardsToShow); // Update on screen resize
    return () => window.removeEventListener("resize", updateCardsToShow); // Cleanup event listener
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const displayedTestimonials = () => {
    const testimonialsToDisplay = [];
    for (let i = 0; i < cardsToShow; i++) {
      testimonialsToDisplay.push(
        testimonials[(activeIndex + i) % testimonials.length]
      );
    }
    return testimonialsToDisplay;
  };

  return (
    <div
      id="testimonials"
      className="py-20 bg-gray-100 w-screen dark:bg-black dark:text-white"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black dark:text-primary uppercase">
          Testimonials
        </h2>
        <p className="text-gray-600 mt-4 dark:text-white">
          What our clients say about us
        </p>
      </div>
      <div className="flex justify-center space-x-4 overflow-hidden w-full px-6 md:px-64">
        {displayedTestimonials().map((testimonial, index) => (
          <div key={index} className="flex justify-center flex-shrink-0">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 p-0 rounded-full mx-1 ${
              index === activeIndex ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
