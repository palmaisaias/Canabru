import React, { useEffect } from "react";
import Navbar from "./components/Navbar"; // Add this import
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import About from "./components/About";
import Store from "./components/Store";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/App.css";
import heroVideo from "./assets/coffee-hero.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <header className="hero-section position-relative">
        <video src={heroVideo} autoPlay loop muted playsInline className="hero-video" />
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="welcome-text display-4 text-white fw-bold">
            Welcome to Canabru Coffee
          </h1>
          <p className="lead text-white mb-4">
            Discover the finest coffee blends and treats just for you.
          </p>
          <button className="btn btn-primary btn-lg">Browse Now</button>
          <div className="scroll-icon mt-5">
            <Link to="store" smooth={true} duration={500}>
              <i className="bi bi-chevron-down text-white fs-1"></i>
            </Link>
          </div>
        </div>
      </header>
      <Store />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
