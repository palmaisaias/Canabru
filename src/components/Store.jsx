import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../styles/Store.css";

const Store = () => {
  return (
    <section id="store" className="store-section" data-aos="fade-up">
      <h2 className="our-prod text-center mb-4" data-aos="fade-right">
        A Taste of Canabru
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
  );
};

export default Store;
