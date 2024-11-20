import React from "react";
import "../styles/StickyBar.css";

const StickyBar = () => {
  return (
    <div className="sticky-bar">
      <button
        className="btn btn-secondary btn-lg"
        onClick={() => window.open("https://www.google.com/maps", "_blank")}
      >
        Get Directions
      </button>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => window.location.href = "tel:+19092712262"}
      >
        Call to Order
      </button>
    </div>
  );
};

export default StickyBar;