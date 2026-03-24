import React, { useState } from "react";

function Collections() {
  const [filter, setFilter] = useState("all");

  const items = [
    { name: "Gold Chain 1", category: "chain" },
    { name: "Gold Ring 1", category: "ring" },
    { name: "Gold Bangle 1", category: "bangle" },
    { name: "Gold Necklace 1", category: "necklace" },
    { name: "Gold Chain 2", category: "chain" },
    { name: "Gold Ring 2", category: "ring" },
  ];

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Our Collections</h1>

        <p className="page-text">
          Browse our jewellery designs by category.
        </p>

        {/* FILTER BUTTONS */}
        <div className="filters">
          <button onClick={() => setFilter("all")} className="filter-btn">All</button>
          <button onClick={() => setFilter("chain")} className="filter-btn">Chains</button>
          <button onClick={() => setFilter("ring")} className="filter-btn">Rings</button>
          <button onClick={() => setFilter("bangle")} className="filter-btn">Bangles</button>
          <button onClick={() => setFilter("necklace")} className="filter-btn">Necklaces</button>
        </div>

        {/* PRODUCTS */}
        <div className="product-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="card">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;