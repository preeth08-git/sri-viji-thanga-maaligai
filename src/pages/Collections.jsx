import { ArrowLeft, X, RotateCcw } from "lucide-react";
import { useState, useRef, useCallback } from "react";

function Ring3DViewer({ image, name }) {
  const [rotX, setRotX] = useState(-10);
  const [rotY, setRotY] = useState(15);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    setRotY((prev) => prev + dx * 0.5);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.5)));
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseUp = useCallback(() => { isDragging.current = false; }, []);

  const onTouchStart = useCallback((e) => {
    isDragging.current = true;
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastPos.current.x;
    const dy = e.touches[0].clientY - lastPos.current.y;
    setRotY((prev) => prev + dx * 0.5);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.5)));
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const reset = () => { setRotX(-10); setRotY(15); };

  return (
    <div style={{ userSelect: "none" }}>
      <div
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
        style={{
          width: "100%",
          height: "260px",
          backgroundColor: "#1a0f08",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: isDragging.current ? "grabbing" : "grab",
          perspective: "800px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Spotlight glow */}
        <div style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,163,58,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: "preserve-3d",
          transition: isDragging.current ? "none" : "transform 0.1s ease",
          filter: "drop-shadow(0 8px 24px rgba(200,163,58,0.45))",
        }}>
          <img
            src={image}
            alt={name}
            draggable={false}
            style={{
              width: "180px",
              height: "180px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Hint label */}
        <div style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(215,194,138,0.6)",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}>
          Drag to rotate
        </div>
      </div>

      {/* Reset button */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          type="button"
          onClick={reset}
          style={{
            background: "none",
            border: "1px solid #C8A33A",
            color: "#C8A33A",
            borderRadius: "999px",
            padding: "4px 14px",
            fontSize: "0.75rem",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <RotateCcw size={12} /> Reset
        </button>
      </div>
    </div>
  );
}

const categories = [
  {
    name: "Rings",
    icon: "💍",
    description: "Engagement, wedding & daily wear rings",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)",
    items: [
      { id: 1, name: "Diamond Solitaire Ring", weight: "4.8g", karat: "22K Gold", image: "/rings/ring1.png" },
      { id: 2, name: "Emerald Cut Ring", weight: "5.2g", karat: "22K Gold", image: "/rings/ring2.png" },
      { id: 3, name: "Twisted Diamond Ring", weight: "6.1g", karat: "22K Gold", image: "/rings/ring3.png" },
      { id: 4, name: "Double Heart Ring", weight: "3.9g", karat: "22K Gold", image: "/rings/ring4.png" },
    ],
  },
  {
    name: "Chains",
    icon: "⛓️",
    description: "Gold chains in various lengths & styles",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #D2B04C 0%, #9A7520 100%)",
    items: [
      { id: 1, name: "Box Chain Necklace", weight: "12.5g", karat: "22K Gold", image: null },
      { id: 2, name: "Rope Chain", weight: "15.8g", karat: "22K Gold", image: null },
      { id: 3, name: "Flat Curb Chain", weight: "18.2g", karat: "22K Gold", image: null },
      { id: 4, name: "Singapore Chain", weight: "10.4g", karat: "18K Gold", image: null },
    ],
  },
  {
    name: "Bangles",
    icon: "✨",
    description: "Traditional & modern bangle sets",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)",
    items: [
      { id: 1, name: "Plain Gold Bangle", weight: "20.0g", karat: "22K Gold", image: null },
      { id: 2, name: "Patterned Bangle Set", weight: "45.0g", karat: "22K Gold", image: null },
      { id: 3, name: "Kada Bangle", weight: "32.5g", karat: "22K Gold", image: null },
      { id: 4, name: "Twisted Bangle", weight: "22.8g", karat: "18K Gold", image: null },
    ],
  },
  {
    name: "Necklaces",
    icon: "📿",
    description: "Elegant necklaces for every occasion",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)",
    items: [
      { id: 1, name: "Lakshmi Pendant Necklace", weight: "28.5g", karat: "22K Gold", image: null },
      { id: 2, name: "Traditional Thali Set", weight: "35.0g", karat: "22K Gold", image: null },
      { id: 3, name: "Kundan Necklace", weight: "42.2g", karat: "22K Gold", image: null },
      { id: 4, name: "Simple Gold Choker", weight: "18.8g", karat: "18K Gold", image: null },
    ],
  },
];

export default function Collections() {
  const [view, setView] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ backgroundColor: "#F7F1E4", minHeight: "70vh", padding: "48px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: "40px" }}>
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
            {view === "categories" ? "OUR COLLECTIONS" : selectedCategory?.name}
          </p>
          <h1 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "bold" }}>
            {view === "categories" ? "Explore Our Categories" : `${selectedCategory?.name} Collection`}
          </h1>
          <div style={{ width: 50, height: 3, backgroundColor: "#C8A33A", borderRadius: 2, marginTop: "12px" }} />
        </div>

        {view === "categories" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => { setSelectedCategory(cat); setView("items"); }}
                style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", backgroundColor: "#FAF6EE", overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}
              >
                <div style={{ height: "160px", background: cat.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>{cat.icon}</div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3 style={{ color: "#2B1A12", fontSize: "0.95rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{cat.name}</h3>
                  <p style={{ color: "#6B5A4B", fontSize: "0.75rem", marginBottom: "16px" }}>{cat.description}</p>
                  <span style={{ border: "1.5px solid #C8A33A", color: "#C8A33A", borderRadius: "999px", padding: "6px 20px", fontSize: "0.82rem", fontWeight: 600, display: "inline-block" }}>Browse</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {view === "items" && selectedCategory && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
            {selectedCategory.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                style={{ border: "1.5px solid #D7C28A", borderRadius: "10px", backgroundColor: "#FAF6EE", overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}
              >
                {item.image ? (
                  <div style={{ height: "140px", backgroundColor: "#F0E8D4", overflow: "hidden" }}>
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <div style={{ height: "140px", background: selectedCategory.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>{selectedCategory.icon}</div>
                )}
                <div style={{ padding: "12px", textAlign: "center" }}>
                  <h4 style={{ color: "#2B1A12", fontSize: "0.75rem", fontWeight: 600, marginBottom: "4px" }}>{item.name}</h4>
                  <p style={{ color: "#6B5A4B", fontSize: "0.72rem" }}>{item.karat} · {item.weight}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal with 3D viewer */}
      {selectedItem && (
        <>
          <div
            onClick={() => setSelectedItem(null)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(43,26,18,0.85)", zIndex: 100 }}
          />
          <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FAF6EE",
            border: "1.5px solid #D7C28A",
            borderRadius: "14px",
            overflow: "hidden",
            zIndex: 101,
            width: "min(420px, 94vw)",
            boxShadow: "0 20px 60px rgba(43,26,18,0.5)",
          }}>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              style={{ position: "absolute", top: "12px", right: "12px", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(43,26,18,0.7)", color: "#F7F1E4", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}
            >
              <X size={16} />
            </button>

            {selectedItem.image ? (
              <Ring3DViewer image={selectedItem.image} name={selectedItem.name} />
            ) : (
              <div style={{ height: "220px", background: selectedCategory?.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.5rem" }}>
                {selectedCategory?.icon}
              </div>
            )}

            <div style={{ padding: "20px 24px 24px" }}>
              <h3 style={{ color: "#2B1A12", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "4px" }}>{selectedItem.name}</h3>
              <div style={{ width: 40, height: 2, backgroundColor: "#C8A33A", borderRadius: 1, marginBottom: "16px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Karat", value: selectedItem.karat },
                  { label: "Weight", value: selectedItem.weight },
                  { label: "Quality", value: "BIS Hallmark" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderRadius: "6px", backgroundColor: "#F0E8D4" }}>
                    <span style={{ color: "#6B5A4B", fontSize: "0.875rem", fontWeight: 500 }}>{row.label}</span>
                    <span style={{ color: "#2B1A12", fontSize: "0.875rem", fontWeight: "bold" }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/919840686575"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", marginTop: "18px", backgroundColor: "#25D366", color: "#FFFFFF", borderRadius: "8px", padding: "12px", textAlign: "center", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}
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