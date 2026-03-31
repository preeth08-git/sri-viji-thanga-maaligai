export default function Contact() {
  return (
    <div style={{ backgroundColor: "#FAF6EE", minHeight: "80vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #3D1F00 0%, #7A5010 60%, #C8A33A 100%)", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <p style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, marginBottom: "10px" }}>GET IN TOUCH</p>
          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "12px" }}>Contact Us</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", maxWidth: "480px" }}>
            Visit us in Chennai or reach out via phone or WhatsApp.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "56px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>

          {/* Address */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(43,26,18,0.08)", border: "1px solid #E8D8B0" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>📍</div>
            <h3 style={{ color: "#2B1A12", fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>Our Address</h3>
            <p style={{ color: "#6B5A4B", fontSize: "0.9rem", lineHeight: 1.7 }}>
              171/81 Eldams Road<br />
              Teynampet<br />
              Chennai, Tamil Nadu – 600018
            </p>
            <a
              href="https://maps.google.com/?q=171/81+Eldams+Road+Teynampet+Chennai+Tamil+Nadu+600018"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "14px", backgroundColor: "#C8A33A", color: "#2B1A12", borderRadius: "999px", padding: "7px 20px", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
              View on Map →
            </a>
          </div>

          {/* Phone */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(43,26,18,0.08)", border: "1px solid #E8D8B0" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>📞</div>
            <h3 style={{ color: "#2B1A12", fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>Call Us</h3>
            <p style={{ color: "#6B5A4B", fontSize: "0.9rem", lineHeight: 1.7 }}>
              +91 98406 86575
            </p>
            <a
              href="tel:+919840686575"
              style={{ display: "inline-block", marginTop: "14px", backgroundColor: "#C8A33A", color: "#2B1A12", borderRadius: "999px", padding: "7px 20px", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
              Call Now →
            </a>
          </div>

          {/* WhatsApp */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(43,26,18,0.08)", border: "1px solid #E8D8B0" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>💬</div>
            <h3 style={{ color: "#2B1A12", fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>WhatsApp</h3>
            <p style={{ color: "#6B5A4B", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Chat with us for quick enquiries about our jewellery collections.
            </p>
            <a
              href="https://wa.me/919840686575"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "14px", backgroundColor: "#25D366", color: "#fff", borderRadius: "999px", padding: "7px 20px", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
              Chat on WhatsApp →
            </a>
          </div>

          {/* Hours */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(43,26,18,0.08)", border: "1px solid #E8D8B0" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🕐</div>
            <h3 style={{ color: "#2B1A12", fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>Shop Hours</h3>
            <p style={{ color: "#6B5A4B", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Mon – Sat: 10:00 AM – 8:00 PM<br />
              Sunday: 11:00 AM – 6:00 PM
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}