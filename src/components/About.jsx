import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import "../styles/About.css"

const About = () => {
    return (
<section
        id="about"
        className="about-section py-5 bg-light"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="text-center mb-4">Rooted in Quality, Driven by Community</h2>
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
    );
};

export default About;