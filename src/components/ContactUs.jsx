import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import "../styles/ContactUs.css"

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section bg-light py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-lg-4">
            <h5>Get in Touch</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-telephone-fill me-2"></i> Phone: (909) 271-2262
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i> Email:{" "}
                <a href="mailto:info@canabru.com" className="text-decoration-none">
                  info@canabru.com
                </a>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i> Address: 14521 Ramona Avenue, Chino, CA 91710
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
  );
};

export default ContactUs;