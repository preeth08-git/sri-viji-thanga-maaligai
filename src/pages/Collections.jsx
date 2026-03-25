import React, { useState } from "react";

function Collections() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = {
    ring: [
      {
        name: "Gold Ring 1",
        weight: "5g",
        image: "https://images.unsplash.com/photo-1589987607627-7cfc4e9a03c4"
      },
      {
        name: "Gold Ring 2",
        weight: "6g",
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a"
      }
    ],
    chain: [
      {
        name: "Gold Chain 1",
        weight: "10g",
        image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1"
      }
    ],
    bangle: [
      {
        name: "Gold Bangle",
        weight: "20g",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d"
      }
    ],
    necklace: [
      {
        name: "Gold Necklace",
        weight: "25g",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
      }
    ]
  };

  return (
    <section className="page">
      <div className="container">
        <h1 className="page-title">Our Collections</h1>

        {/* CATEGORY VIEW */}
        {!selectedCategory && (
          <div className="category-grid">
            <div onClick={() => setSelectedCategory("ring")} className="category-card">Rings</div>
            <div onClick={() => setSelectedCategory("chain")} className="category-card">Chains</div>
            <div onClick={() => setSelectedCategory("bangle")} className="category-card">Bangles</div>
            <div onClick={() => setSelectedCategory("necklace")} className="category-card">Necklaces</div>
          </div>
        )}

        {/* ITEMS VIEW */}
        {selectedCategory && (
          <>
            <button className="back-btn" onClick={() => setSelectedCategory(null)}>
              ← Back
            </button>

            <div className="product-grid">
              {data[selectedCategory].map((item, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => setSelectedItem(item)}
                >
                  <img src={item.image} alt={item.name} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* MODAL */}
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