import React, { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

const Toggle = () => {
  // Default to light mode and check localStorage for theme preference
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle dark mode
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  // Apply or remove dark mode class and store preference in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="w-16 h-8 bg-primary flex items-center justify-between px-2 rounded-full cursor-pointer relative"
      onClick={handleToggle}
    >
      <span>
        <IoMoonOutline className="text-white w-4 h-4" />
      </span>
      <span>
        <GoSun className="text-white w-4 h-4" />
      </span>

      <div
        className={`absolute bg-white rounded-full w-6 h-6 transition-all duration-300 ${
          darkMode ? "translate-x-full right-7" : "translate-x-0 left-1"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
