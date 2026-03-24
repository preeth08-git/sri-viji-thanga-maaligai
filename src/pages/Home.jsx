import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1 className="title">Quality Gold Jewellery You Can Trust</h1>

          <p className="subtitle">
            We offer pure gold jewellery with simple and beautiful designs for every occasion.
          </p>

          <div className="buttons">
            <button className="btn" onClick={() => navigate("/collections")}>
              View Collections
            </button>

            <button className="btn outline" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="products">
        <div className="container">
          <h2>Our Jewellery</h2>

          <div className="product-grid">
            <div className="card">Gold Chains</div>
            <div className="card">Rings</div>
            <div className="card">Bangles</div>
            <div className="card">Necklaces</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <div className="container">
          <h2>Why Choose Us</h2>

          <div className="why-grid">
            <div>✔ Pure Gold</div>
            <div>✔ Fair Price</div>
            <div>✔ Trusted Shop</div>
            <div>✔ Good Service</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;