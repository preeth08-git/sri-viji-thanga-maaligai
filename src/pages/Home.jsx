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

      {/* SIMPLE INFO SECTION */}
      <section className="info">
        <div className="container">
          <h2>Trusted Jewellery Shop in Chennai</h2>

          <p>
            We provide pure gold jewellery with fair pricing and good customer service.
            Visit our shop or contact us for more details.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;