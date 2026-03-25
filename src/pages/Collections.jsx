import React, { useState } from "react";

function Collections() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "Gold Chain",
      category: "chain",
      weight: "10g",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1"
    },
    {
      name: "Gold Ring",
      category: "ring",
      weight: "5g",
      image: "https://images.unsplash.com/photo-1589987607627-7cfc4e9a03c4"
    },
    {
      name: "Gold Bangle",
      category: "bangle",
      weight: "20g",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
    },
    {
      name: "Gold Necklace",
      category: "necklace",
      weight: "25g",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
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

        {/* FILTERS */}
        <div className="filters">
          <button onClick={() => setFilter("all")} className="filter-btn">All</button>
          <button onClick={() => setFilter("chain")} className="filter-btn">Chains</button>
          <button onClick={() => setFilter("ring")} className="filter-btn">Rings</button>
          <button onClick={() => setFilter("bangle")} className="filter-btn">Bangles</button>
          <button onClick={() => setFilter("necklace")} className="filter-btn">Necklaces</button>
        </div>

        {/* SMALL IMAGES GRID */}
        <div className="product-grid">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="card"
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedItem && (
        <div className="modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <h3>{selectedItem.name}</h3>
            <p>Weight: {selectedItem.weight}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Collections;