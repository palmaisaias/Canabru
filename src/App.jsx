import React, { useEffect } from "react";
import Navbar from "./components/Navbar"; // Add this import
import Footer from "./components/Footer"
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
      <section
        id="about"
        className="about-section py-5 bg-light"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="text-center mb-4">About Canabru Coffee</h2>
          <div className="row align-items-center g-5">
            {/* Text Content */}
            <div className="col-lg-6">
              <p className="lead">
                At <strong>Canabru Coffee</strong>, we pride ourselves on
                crafting the perfect cup, sourced from the finest beans and
                brewed to perfection. Every sip tells a story of passion,
                quality, and community. First opened in 2013, the original home 
                of Canabru Coffee can be located in the western Inland Empire of 
                San Bernardino County, with Los Angeles County, in the city of Chino. 
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-cup-fill me-3"></i> Locally
                  sourced beans from sustainable farms.
                </li>
                <li className="mb-3">
                  <i className="bi bi-droplet-half me-3"></i>{" "}
                  Freshly brewed coffee every day.
                </li>
                <li className="mb-3">
                  <i className="bi bi-people-fill me-3"></i> A
                  place for community and connection.
                </li>
              </ul>
            </div>

            {/* Image/Visual */}
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Coffee beans and a cup"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Highlights Section */}
          <div className="row mt-5 text-center">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
              <div className="card shadow border-0">
                <div className="card-body">
                  <i className="bi bi-geo-alt-fill text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">Locally Sourced</h5>
                  <p className="card-text">
                    Supporting farmers and ensuring the highest quality beans.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
              <div className="card shadow border-0">
                <div className="card-body">
                  <i className="bi bi-clock-fill text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">Freshly Brewed</h5>
                  <p className="card-text">
                    Brewed fresh daily, ensuring bold flavors in every cup.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
              <div className="card shadow border-0">
                <div className="card-body">
                  <i className="bi bi-people-fill text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">Community Focused</h5>
                  <p className="card-text">
                    A place for people to connect, relax, and enjoy great
                    coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="location" className="location-section" data-aos="fade-up">
        <h2>Our Location</h2>
        <MapContainer
          center={[34.0181, -117.6873]}
          zoom={13}
          className="location-map"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[34.0181, -117.6873]}>
            <Popup>
              Canabru Coffee
              <br />
              14521 Ramona Avenue, Chino, CA 91710
            </Popup>
          </Marker>
        </MapContainer>
      </section> */}
      <section
        id="contact"
        className="contact-section bg-light py-5"
        data-aos="fade-right"
      >
        <div className="container">
          <h2 className="text-center mb-5">Contact Us</h2>
          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-4">
              <h5>Get in Touch</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-telephone-fill me-2"></i> Phone: (909)
                  271-2262
                </li>
                <li>
                  <i className="bi bi-envelope-fill me-2"></i> Email:{" "}
                  <a
                    href="mailto:info@canabru.com"
                    className="text-decoration-none"
                  >
                    info@canabru.com
                  </a>
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i> Address: 14521
                  Ramona Avenue, Chino, CA 91710
                </li>
              </ul>
              <p className="mt-3">
                <strong>Business Hours:</strong>
                <br />
                Weekdays: 6:30 AM – 9:00 PM
                <br />
                Weekends: 7:00 AM – 9:00 PM
              </p>
            </div>

            {/* Contact Form */}
            <div className="col-lg-4">
              <h5>Send Us a Message</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="col-lg-4">
              <h5>Find Us Here</h5>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.845615882832!2d-117.6925677847621!3d34.01766528061482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3337e7e9fbed7%3A0x826f5d94a3c28c06!2s14521%20Ramona%20Ave%2C%20Chino%2C%20CA%2091710%2C%20USA!5e0!3m2!1sen!2sus!4v1689729123456!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
