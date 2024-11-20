import React, { useEffect } from "react";
import Navbar from "./components/Navbar"; // Add this import
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import About from "./components/About";
import Store from "./components/Store";
import StickyBar from "./components/StickyBar";
import ParallaxSection from "./components/ParallaxSection";
import image1 from "/src/assets/Para1.jpg"; // Import images directly
import image2 from "/src/assets/Para2.jpg";
import "leaflet/dist/leaflet.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
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
      <Hero />
      <Store />
      <ParallaxSection image={image1} text="Explore More About Our Store" />
      <About />
      <ParallaxSection image={image2} text="Discover Our Story" />
      <ContactUs />
      <Footer />
      <StickyBar />
    </div>
  );
};

export default App;
