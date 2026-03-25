import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer({ setPage }) {
  const handleNav = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{ backgroundColor: "#2B1A12", color: "#F7F1E4", paddingTop: "48px", paddingBottom: "24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          <div>
            <span style={{ color: "#C8A33A", fontSize: "1.5rem", fontWeight: "bold" }}>SRI VIJI</span>
            <p style={{ color: "#A08060", fontSize: "0.875rem", marginTop: "10px" }}>Trusted gold jewellers since 1985. Quality you can rely on.</p>
          </div>
          <div>
            <h3 style={{ color: "#C8A33A", fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "16px" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button onClick={() => handleNav("home")} style={{ background: "none", border: "none", color: "#D7C28A", textAlign: "left", cursor: "pointer" }}>Home</button>
              <button onClick={() => handleNav("collections")} style={{ background: "none", border: "none", color: "#D7C28A", textAlign: "left", cursor: "pointer" }}>Collections</button>
              <button onClick={() => handleNav("contact")} style={{ background: "none", border: "none", color: "#D7C28A", textAlign: "left", cursor: "pointer" }}>Contact Us</button>
            </div>
          </div>
          <div>
            <h3 style={{ color: "#C8A33A", fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "16px" }}>Contact</h3>
            <p style={{ fontSize: "0.85rem", color: "#A08060", display: "flex", gap: "8px" }}><MapPin size={14}/> Kumbakonam, TN</p>
            <p style={{ fontSize: "0.85rem", color: "#A08060", display: "flex", gap: "8px" }}><Phone size={14}/> +91 98406 86575</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
