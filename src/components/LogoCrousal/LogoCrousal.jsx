import React from "react";

const logos = [
  "/images/ActiveClimateAction.png",
  "/images/EuropeanUnion.png",
  "/images/ActiveClimateAction.png",
  "/images/EuropeanUnion.png",
  "/images/ActiveClimateAction.png",
  "/images/EuropeanUnion.png",
];

const LogoCrousal = () => {
  return (
    <div className="relative py-4">
      {/* Add fading gradient effect on the left and right */}
      <div className="absolute inset-y-0 left-0 w-32 bg-white z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-white z-10"></div>

      {/* Marquee container */}
      <div className="overflow-hidden relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {/* Duplicating logos multiple times for seamless scrolling */}
          {logos.concat(logos, logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="transition-transform duration-300 hover:scale-110"
              style={{
                width: "80px", // Adjust the width of each logo
                height: "auto", // Maintain aspect ratio
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCrousal;
