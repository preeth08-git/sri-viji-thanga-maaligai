export default function Home({ onNavigate }) {
  return (
    <div>
      {/* ── Hero ── */}
      <div style={{
        background: "linear-gradient(135deg, #3D1F00 0%, #7A5010 40%, #C8A33A 100%)",
        minHeight: "70vh", display: "flex", alignItems: "center", padding: "80px 24px"
      }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", width: "100%" }}>
          <p style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, marginBottom: "16px" }}>
            SRI VIJI THANGA MAALIGAI
          </p>
          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "20px", maxWidth: "600px" }}>
            Discover the Brilliance<br />of Gold Jewellery
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", marginBottom: "36px", maxWidth: "480px", lineHeight: 1.6 }}>
            We have beautiful gold jewellery for every occasion — weddings, festivals, and daily wear.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button type="button" onClick={() => onNavigate("collections")}
              style={{ backgroundColor: "#C8A33A", color: "#2B1A12", border: "none", borderRadius: "8px", padding: "14px 28px", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer" }}>
              View Collections ›
            </button>
            <button type="button" onClick={() => onNavigate("contact")}
              style={{ backgroundColor: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "8px", padding: "14px 28px", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer" }}>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* ── Gold & Silver Cards ── */}
      <div style={{ backgroundColor: "#F7F1E4", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <p style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "6px" }}>SHOP BY METAL</p>
            <h2 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800 }}>Explore Our Collections</h2>
            <div style={{ width: 50, height: 3, backgroundColor: "#C8A33A", borderRadius: 2, margin: "12px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px", maxWidth: "640px", margin: "0 auto" }}>
            {/* Gold Card */}
            <button type="button" onClick={() => onNavigate("collections", "gold")}
              style={{ border: "none", borderRadius: "16px", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", boxShadow: "0 8px 32px rgba(200,163,58,0.25)" }}>
              <div style={{ height: "180px", background: "linear-gradient(135deg, #C8A33A 0%, #7A5010 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff8e7", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "0.1em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>GOLD</span>
              </div>
              <div style={{ padding: "18px 20px", backgroundColor: "#FDF8EC", borderTop: "2px solid #C8A33A" }}>
                <h3 style={{ color: "#2B1A12", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Gold Jewellery</h3>
                <p style={{ color: "#6B5A4B", fontSize: "0.8rem", marginBottom: "8px" }}>22K With Hallmark Gold</p>
                <p style={{ color: "#8B7355", fontSize: "0.75rem", marginBottom: "14px" }}>Rings · Chains · Bangles · Necklaces</p>
                <span style={{ backgroundColor: "#C8A33A", color: "#2B1A12", borderRadius: "999px", padding: "7px 24px", fontSize: "0.84rem", fontWeight: 700, display: "inline-block" }}>Explore Gold →</span>
              </div>
            </button>

            {/* Silver Card */}
            <button type="button" onClick={() => onNavigate("collections", "silver")}
              style={{ border: "none", borderRadius: "16px", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", boxShadow: "0 8px 32px rgba(100,140,170,0.2)" }}>
              <div style={{ height: "180px", background: "linear-gradient(135deg, #9EB3C8 0%, #3A4D5C 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#f0f6ff", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "0.1em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>SILVER</span>
              </div>
              <div style={{ padding: "18px 20px", backgroundColor: "#F0F5FA", borderTop: "2px solid #8A9BB0" }}>
                <h3 style={{ color: "#1A2B3C", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Silver Jewellery</h3>
                <p style={{ color: "#4A6070", fontSize: "0.8rem", marginBottom: "8px" }}>Pure 925 Sterling Silver</p>
                <p style={{ color: "#6A8090", fontSize: "0.75rem", marginBottom: "14px" }}>Rings · Chains · Anklets · Earrings</p>
                <span style={{ backgroundColor: "#8A9BB0", color: "#fff", borderRadius: "999px", padding: "7px 24px", fontSize: "0.84rem", fontWeight: 700, display: "inline-block" }}>Explore Silver →</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{ backgroundColor: "#2B1A12", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", textAlign: "center" }}>
          {[
            { number: "30+", label: "YEARS OF TRUST" },
            { number: "10,000+", label: "HAPPY CUSTOMERS" },
            { number: "500+", label: "GOLD ITEMS" },
            { number: "916 Hallmark", label: "QUALITY GUARANTEE" },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{ color: "#C8A33A", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "6px" }}>{stat.number}</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}