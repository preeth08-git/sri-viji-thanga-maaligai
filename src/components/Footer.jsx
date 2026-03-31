export default function Footer({ onNavigate }) {
  return (
    <footer style={{ backgroundColor: "#2B1A12", color: "#F7F1E4", padding: "48px 24px 24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "36px", marginBottom: "36px" }}>

          {/* Brand */}
          <div>
            <h3 style={{ color: "#C8A33A", fontSize: "1.1rem", fontWeight: 800, marginBottom: "6px" }}>SRI VIJI THANGA MAALIGAI</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", lineHeight: 1.7 }}>
              Trusted gold jewellers since 1995.<br />
              BIS Hallmark certified.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#C8A33A", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Quick Links</h4>
            {["home", "collections", "men", "women", "contact"].map((page) => (
              <button key={page} type="button" onClick={() => onNavigate(page)}
                style={{ display: "block", background: "none", border: "none", color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", cursor: "pointer", padding: "3px 0", textTransform: "capitalize", textAlign: "left" }}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#C8A33A", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Contact</h4>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.8 }}>
              171/81 Eldams Road<br />
              Teynampet, Chennai<br />
              Tamil Nadu – 600018<br />
              +91 98406 86575
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Sri Viji Thanga Maaligai. Est. 1995. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}