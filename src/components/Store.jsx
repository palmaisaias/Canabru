import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../styles/Store.css";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Macchiato",
      price: "$4.50",
      category: "Hot Beverages",
      image:
        "https://thelittlestcrumb.com/wp-content/uploads/espresso-macchiato-featured-image-1.jpg",
    },
    {
      id: 2,
      name: "Latte",
      price: "$4.50",
      category: "Hot Beverages",
      image:
        "https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_315919556-scaled.jpeg",
    },
    {
      id: 3,
      name: "Mocha",
      price: "$5.00",
      category: "Specialty Drinks",
      image:
        "https://i.pinimg.com/originals/76/8b/aa/768baa302c5195ddedfa35ff5ccb7fa0.jpg",
    },
    {
      id: 4,
      name: "Flat White",
      price: "$4.75",
      category: "Hot Beverages",
      image:
        "https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg",
    },
    {
      id: 5,
      name: "Espresso",
      price: "$3.00",
      category: "Espresso",
      image:
        "https://www.siamhillscoffee.com/wp-content/uploads/Top-10-Most-Popular-Espresso-Drinks-A-Complete-Overview-%E2%80%93-10-1500x1001.jpg",
    },
  ];

  const categories = ["All", "Hot Beverages", "Specialty Drinks", "Espresso"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="store" className="store-section" data-aos="fade-up">
      <h2 className="our-prod text-center mb-4" data-aos="fade-right">
        a taste of canabru
      </h2>

      {/* Category Filter Bar */}
      <div className="category-bar text-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              key={product.id}
            >
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary">Add to your day</button>
                </div>
                <HeartIcon />
              </div>
            </div>
          ))}
          <div
            className="cta-banner text-center p-4 mt-5"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <h3>Love Our Brews?</h3>
            <p>Subscribe for exclusive deals and updates!</p>
            <button className="btn btn-warning">Subscribe Now</button>
          </div>
          {/* Duplicate this block for more products */}
        </div>
      </div>
    </section>
  );
};

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <i
      className={`bi ${
        liked ? "bi-heart-fill text-danger" : "bi-heart"
      } heart-icon`}
      onClick={toggleLike}
    ></i>
  );
};

export default Store;
