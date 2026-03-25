import React, { useState } from "react";

function Collections() {
  const [filter, setFilter] = useState("all");

  const items = [
    {
      name: "Gold Chain",
      category: "chain",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1"
    },
    {
      name: "Gold Ring",
      category: "ring",
      image: "https://images.unsplash.com/photo-1589987607627-7cfc4e9a03c4"
    },
    {
      name: "Gold Bangle",
      category: "bangle",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
    },
    {
      name: "Gold Necklace",
      category: "necklace",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
    },
    {
      name: "Gold Chain Design",
      category: "chain",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
    },
    {
      name: "Gold Ring Design",
      category: "ring",
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a"
    }
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
        <div className={filter === "all" ? "product-list" : "product-grid"}>
          {filteredItems.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;