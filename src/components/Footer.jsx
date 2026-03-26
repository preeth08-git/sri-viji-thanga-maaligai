import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer({ setPage }) {
  return (
    <footer style={{ backgroundColor: "#2B1A12", color: "#F7F1E4", paddingTop: "48px", paddingBottom: "24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "40px" }}>
          <div>
            <span style={{ color: "#C8A33A", fontSize: "1.5rem", fontWeight: "bold", display: "block" }}>SRI VIJI</span>
            <span style={{ color: "#D7C28A", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>Thanga Maaligai</span>
            <p style={{ color: "#A08060", lineHeight: 1.7, fontSize: "0.875rem", marginTop: "8px" }}>Trusted gold jewellers since 1995. Quality you can rely on, prices that are fair.</p>
          </div>
          <div>
            <h3 style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "16px" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[{ id: "home", label: "Home" }, { id: "collections", label: "Collections" }, { id: "contact", label: "Contact Us" }].map((link) => (
                <li key={link.id}>
                  <button type="button" onClick={() => setPage(link.id)} style={{ background: "none", border: "none", color: "#D7C28A", fontSize: "0.875rem", cursor: "pointer", padding: 0 }}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "16px" }}>Contact</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <MapPin size={14} style={{ color: "#C8A33A", marginTop: 3, flexShrink: 0 }} />
                <span style={{ color: "#A08060", fontSize: "0.875rem" }}>171/81 Eldams Road Teynampet Chennai, Tamil Nadu – 600018</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={14} style={{ color: "#C8A33A", flexShrink: 0 }} />
                <a href="tel:+919840686575" style={{ color: "#D7C28A", fontSize: "0.875rem", textDecoration: "none" }}>+91 98765 43210</a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <Clock size={14} style={{ color: "#C8A33A", marginTop: 3, flexShrink: 0 }} />
                <span style={{ color: "#A08060", fontSize: "0.875rem" }}>Mon–Sun: 9:30 AM – 10:00 PM<br />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #3A241A", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ color: "#6B5A4B", fontSize: "0.75rem" }}>© {new Date().getFullYear()} Sri Viji Thanga Maaligai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}