"use client";

import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToTop}
        className="cursor-pointer bg-primary text-white p-4 rounded-full hover:shadow-lg
                   transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTop;
