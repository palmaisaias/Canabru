import React from "react";
import { Parallax } from "react-parallax";
import "../styles/Parallax.css"; // Ensure the CSS file path is correct

const ParallaxSection = ({ image, text }) => {
  return (
    <Parallax bgImage={image} strength={500}>
      <div className="parallax-section">
        <div className="parallax-overlay">
          <h2>{text}</h2>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;