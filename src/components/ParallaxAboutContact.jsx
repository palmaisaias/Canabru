import React from "react";
import "../styles/Parallax.css";
import ParaImage2 from "../assets/Para2.jpg"

const ParallaxAboutContact = () => {
  return (
    <div className="parallax-section" style={{ backgroundImage:`url(${ParaImage2})` }}>
      <div className="parallax-overlay">
        <h2></h2>
      </div>
    </div>
  );
};

export default ParallaxAboutContact;