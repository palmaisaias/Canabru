import React, { useEffect } from "react";
import "../styles/Parallax.css"; // Ensure the CSS file path is correct

const ParallaxSection = ({ image, text }) => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax-section");
      parallaxElements.forEach((element) => {
        const offset = window.pageYOffset;
        element.style.backgroundPosition = `center ${offset * 0.5}px`; // Adjust the multiplier for the speed
      });
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="parallax-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="parallax-overlay">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default ParallaxSection;