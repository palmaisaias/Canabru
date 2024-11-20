import React from "react";
import "../styles/Parallax.css";
import ParaImage1 from "../assets/Para1.jpg"

const ParallaxStoreAbout = () => {
  return (
    <div className="parallax-section" style={{ backgroundImage:`url(${ParaImage1})` }}>
      <div className="parallax-overlay">
        <h2>Discover Our Story</h2>
      </div>
    </div>
  );
};

export default ParallaxStoreAbout;