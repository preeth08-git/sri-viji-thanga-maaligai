import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    name: "Rings", icon: "💍", itemCount: 5,
    gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)",
    items: [
      { id: 1, name: "Lotus Flower Ring", weight: "4.8g", karat: "22K Gold", gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)" },
      { id: 2, name: "Classic Band Ring", weight: "5.2g", karat: "22K Gold", gradient: "linear-gradient(135deg, #D4AA40 0%, #9A7520 100%)" },
      { id: 3, name: "Temple Design Ring", weight: "6.1g", karat: "22K Gold", gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)" },
      { id: 4, name: "Peacock Ring", weight: "7.4g", karat: "22K Gold", gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)" },
      { id: 5, name: "Spiral Twist Ring", weight: "3.9g", karat: "18K Gold", gradient: "linear-gradient(135deg, #D2B04C 0%, #8B6914 100%)" },
    ],
  },
  {
    name: "Chains", icon: "⛓️", itemCount: 4,
    gradient: "linear-gradient(135deg, #D2B04C 0%, #9A7520 100%)",
    items: [
      { id: 1, name: "Box Chain Necklace", weight: "12.5g", karat: "22K Gold", gradient: "linear-gradient(135deg, #D2B04C 0%, #9A7520 100%)" },
      { id: 2, name: "Rope Chain", weight: "15.8g", karat: "22K Gold", gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)" },
      { id: 3, name: "Flat Curb Chain", weight: "18.2g", karat: "22K Gold", gradient: "linear-gradient(135deg, #BF9A30 0%, #6B4F0A 100%)" },
      { id: 4, name: "Singapore Chain", weight: "10.4g", karat: "18K Gold", gradient: "linear-gradient(135deg, #D4AA40 0%, #7A5C10 100%)" },
    ],
  },
  {
    name: "Bangles", icon: "✨", itemCount: 4,
    gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)",
    items: [
      { id: 1, name: "Plain Gold Bangle", weight: "20.0g", karat: "22K Gold", gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)" },
      { id: 2, name: "Patterned Bangle Set", weight: "45.0g", karat: "22K Gold", gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)" },
      { id: 3, name: "Kada Bangle", weight: "32.5g", karat: "22K Gold", gradient: "linear-gradient(135deg, #D2B04C 0%, #6B4F0A 100%)" },
      { id: 4, name: "Twisted Bangle", weight: "22.8g", karat: "18K Gold", gradient: "linear-gradient(135deg, #D4AA40 0%, #9A7520 100%)" },
    ],
  },
  {
    name: "Necklaces", icon: "📿", itemCount: 4,
    gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)",
    items: [
      { id: 1, name: "Lakshmi Pendant Necklace", weight: "28.5g", karat: "22K Gold", gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)" },
      { id: 2, name: "Traditional Thali Set", weight: "35.0g", karat: "22K Gold", gradient: "linear-gradient(135deg, #D2B04C 0%, #8B6914 100%)" },
      { id: 3, name: "Kundan Necklace", weight: "42.2g", karat: "22K Gold", gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)" },
      { id: 4, name: "Simple Gold Choker", weight: "18.8g", karat: "18K Gold", gradient: "linear-gradient(135deg, #D4AA40 0%, #9A7520 100%)" },
    ],
  },
];

export default function Collections() {
  const [view, setView] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ backgroundColor: "#F7F1E4", minHeight: "70vh" }} className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          {view === "items" && (
            <button
              type="button"
              onClick={() => { setView("categories"); setSelectedCategory(null); }}
              style={{ color: "#C8A33A", border: "1.5px solid #C8A33A", borderRadius: "6px", padding: "8px 16px", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "transparent", cursor: "pointer", marginBottom: "20px" }}
            >
              <ArrowLeft size={15} /> Back to Categories
            </button>
          )}
          <p style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "4px" }}>
            {view === "categories" ? "Shop by Category" : selectedCategory?.name}
          </p>
          <h1 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "bold" }}>
            {view === "categories" ? "Our Collections" : `${selectedCategory?.name} Collection`}
          </h1>
          <div style={{ width: 50, height: 3, backgroundColor: "#C8A33A", borderRadius: 2, marginTop: "12px" }} />
        </div>

        {view === "categories" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => { setSelectedCategory(cat); setView("items"); }}
                style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", backgroundColor: "#FAF6EE", overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}
              >
                <div style={{ height: "160px", background: cat.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>
                  {cat.icon}
                </div>
                <div className="p-5 text-center">
                  <h3 style={{ color: "#2B1A12", fontSize: "0.95rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{cat.name}</h3>
                  <p style={{ color: "#6B5A4B", fontSize: "0.75rem", marginBottom: "16px" }}>{cat.itemCount} items</p>
                  <span style={{ border: "1.5px solid #C8A33A", color: "#C8A33A", borderRadius: "999px", padding: "6px 20px", fontSize: "0.82rem", fontWeight: 600, display: "inline-block" }}>Browse</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {view === "items" && selectedCategory && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {selectedCategory.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                style={{ border: "1.5px solid #D7C28A", borderRadius: "10px", backgroundColor: "#FAF6EE", overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}
              >
                <div style={{ height: "110px", background: item.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                  {selectedCategory.icon}
                </div>
                <div className="p-3 text-center">
                  <h4 style={{ color: "#2B1A12", fontSize: "0.75rem", fontWeight: 600, marginBottom: "4px" }}>{item.name}</h4>
                  <p style={{ color: "#6B5A4B", fontSize: "0.75rem" }}>{item.karat} · {item.weight}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <>
          <div
            onClick={() => setSelectedItem(null)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(43,26,18,0.75)", zIndex: 100 }}
          />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#FAF6EE", border: "1.5px solid #D7C28A", borderRadius: "14px", overflow: "hidden", zIndex: 101, width: "min(400px, 92vw)", boxShadow: "0 20px 60px rgba(43,26,18,0.4)" }}>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              style={{ position: "absolute", top: "12px", right: "12px", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(43,26,18,0.7)", color: "#F7F1E4", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}
            >
              <X size={16} />
            </button>
            <div style={{ height: "220px", background: selectedItem.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.5rem" }}>
              {selectedCategory?.icon}
            </div>
            <div className="p-6">
              <h3 style={{ color: "#2B1A12", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "4px" }}>{selectedItem.name}</h3>
              <div style={{ width: 40, height: 2, backgroundColor: "#C8A33A", borderRadius: 1, marginBottom: "16px" }} />
              <div className="space-y-3">
                {[{ label: "Karat", value: selectedItem.karat }, { label: "Weight", value: selectedItem.weight }, { label: "Quality", value: "BIS Hallmark" }].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 px-3 rounded-md" style={{ backgroundColor: "#F0E8D4" }}>
                    <span style={{ color: "#6B5A4B", fontSize: "0.875rem", fontWeight: 500 }}>{row.label}</span>
                    <span style={{ color: "#2B1A12", fontSize: "0.875rem", fontWeight: "bold" }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", marginTop: "20px", backgroundColor: "#25D366", color: "#FFFFFF", borderRadius: "8px", padding: "12px", textAlign: "center", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}