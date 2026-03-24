import React from "react";
import "./index.css"; // make sure this exists

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Quality Gold Jewellery You Can Trust</h1>

        <p>
          We offer pure gold jewellery with simple and beautiful designs for every occasion.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View Collections</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
