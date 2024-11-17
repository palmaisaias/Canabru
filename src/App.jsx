import React, { useEffect } from "react";
import Navbar from "./components/Navbar"; // Add this import
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import About from "./components/About";
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
        <video src={heroVideo} autoPlay loop muted className="hero-video" />
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
      <section id="store" className="store-section" data-aos="fade-up">
        <h2 className="our-prod text-center mb-4" data-aos="fade-right">
          Our Products
        </h2>
        <div className="container">
          <div className="row g-4">
            {/* Example product card */}
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="card">
                <img
                  src="https://thelittlestcrumb.com/wp-content/uploads/espresso-macchiato-featured-image-1.jpg"
                  className="card-img-top"
                  alt="Macchiato"
                />
                <div className="card-body">
                  <h5 className="card-title">Macchiato</h5>
                  <p className="card-text">$4.50</p>
                  <button className="btn btn-primary">Add to your day</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="card">
                <img
                  src="https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_315919556-scaled.jpeg"
                  className="card-img-top"
                  alt="Latte"
                />
                <div className="card-body">
                  <h5 className="card-title">Latte</h5>
                  <p className="card-text">$4.50</p>
                  <button className="btn btn-primary">Sip it now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="card">
                <img
                  src="https://i.pinimg.com/originals/76/8b/aa/768baa302c5195ddedfa35ff5ccb7fa0.jpg"
                  className="card-img-top"
                  alt="Mocha"
                />
                <div className="card-body">
                  <h5 className="card-title">Mocha</h5>
                  <p className="card-text">$5.00</p>
                  <button className="btn btn-primary">Get your fix</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="card">
                <img
                  src="https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg"
                  className="card-img-top"
                  alt="Flat White"
                />
                <div className="card-body">
                  <h5 className="card-title">Flat White</h5>
                  <p className="card-text">$4.75</p>
                  <button className="btn btn-primary">Start brewing</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="card">
                <img
                  src="https://www.siamhillscoffee.com/wp-content/uploads/Top-10-Most-Popular-Espresso-Drinks-A-Complete-Overview-%E2%80%93-10-1500x1001.jpg"
                  className="card-img-top"
                  alt="Espresso"
                />
                <div className="card-body">
                  <h5 className="card-title">Espresso</h5>
                  <p className="card-text">$3.00</p>
                  <button className="btn btn-primary">Order now</button>
                </div>
              </div>
            </div>

            {/* Duplicate this block for more products */}
          </div>
        </div>
      </section>
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
