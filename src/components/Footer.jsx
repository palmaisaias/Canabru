import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import "../styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Social Media Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <ul className="social-media list-unstyled d-flex gap-3">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram fs-4 text-white"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook fs-4 text-white"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter fs-4 text-white"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#store" className="text-white text-decoration-none">
                  Store
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-white text-decoration-none"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-4 col-md-12">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>&copy; 2024 Canabru Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;