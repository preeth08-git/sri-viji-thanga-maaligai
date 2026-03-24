import React from "react";

function Collections() {
  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Our Collections</h1>

        <p className="page-text">
          Explore our gold jewellery designs. Visit our shop to see more.
        </p>

        <div className="product-grid">
          <div className="card">Gold Chains</div>
          <div className="card">Gold Rings</div>
          <div className="card">Gold Bangles</div>
          <div className="card">Gold Necklaces</div>
        </div>
      </div>
    </section>
  );
}

export default Collections;