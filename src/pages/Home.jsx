import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Rings", description: "Engagement, wedding & daily wear rings", icon: "💍", gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)" },
  { name: "Chains", description: "Gold chains in various lengths & styles", icon: "⛓️", gradient: "linear-gradient(135deg, #D2B04C 0%, #9A7520 100%)" },
  { name: "Bangles", description: "Traditional & modern bangle sets", icon: "✨", gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)" },
  { name: "Necklaces", description: "Elegant necklaces for every occasion", icon: "📿", gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)" },
];

export default function Home({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #2B1A12 0%, #3A241A 40%, #6B4A1A 70%, #8B6914 100%)", minHeight: "520px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "64px 24px", position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "560px" }}>
            <span style={{ color: "#D7C28A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, display: "block", marginBottom: "12px" }}>Sri Viji Thanga Maaligai</span>
            <h1 style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>Discover the Brilliance of Gold Jewellery</h1>
            <p style={{ color: "#D7C28A", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "32px" }}>We have beautiful gold jewellery for every occasion — weddings, festivals, and daily wear.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <button type="button" onClick={() => setPage("collections")}
                style={{ backgroundColor: "#C8A33A", color: "#2B1A12", borderRadius: "6px", padding: "12px 28px", fontWeight: 700, fontSize: "0.95rem", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                View Collections <ChevronRight size={16} />
              </button>
              <button type="button" onClick={() => setPage("contact")}
                style={{ border: "2px solid #D7C28A", color: "#F7F1E4", borderRadius: "6px", padding: "12px 28px", fontWeight: 600, fontSize: "0.95rem", backgroundColor: "transparent", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section style={{ backgroundColor: "#F7F1E4", padding: "64px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "8px" }}>Our Collections</p>
            <h2 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: "bold" }}>Explore Our Categories</h2>
            <div style={{ width: 60, height: 3, backgroundColor: "#C8A33A", borderRadius: 2, margin: "16px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {categories.map((cat) => (
              <button key={cat.name} type="button" onClick={() => setPage("collections")}
                style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", backgroundColor: "#FAF6EE", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", width: "100%" }}>
                <div style={{ height: "140px", background: cat.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>{cat.icon}</div>
                <div style={{ padding: "16px", textAlign: "center" }}>
                  <h3 style={{ color: "#2B1A12", fontSize: "0.9rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{cat.name}</h3>
                  <p style={{ color: "#6B5A4B", fontSize: "0.75rem", lineHeight: 1.5, marginBottom: "12px" }}>{cat.description}</p>
                  <span style={{ border: "1.5px solid #C8A33A", color: "#C8A33A", borderRadius: "999px", padding: "4px 16px", fontSize: "0.78rem", fontWeight: 600 }}>Browse</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#2B1A12", padding: "40px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "24px", textAlign: "center" }}>
            {[{ label: "Years of Trust", value: "30+" }, { label: "Happy Customers", value: "10,000+" }, { label: "Gold Items & Silver Items", value: "500+" }, { label: "Quality Guarantee", value: "916 Hall Mark" }].map((item) => (
              <div key={item.label}>
                <div style={{ color: "#C8A33A", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "4px" }}>{item.value}</div>
                <div style={{ color: "#A08060", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}