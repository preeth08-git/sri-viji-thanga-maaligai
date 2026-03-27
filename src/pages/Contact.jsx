import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#F7F1E4", minHeight: "70vh", padding: "48px 0" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "8px" }}>Get in Touch</p>
          <h1 style={{ color: "#2B1A12", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "bold", marginBottom: "12px" }}>Visit Our Shop</h1>
          <div style={{ width: 50, height: 3, backgroundColor: "#C8A33A", borderRadius: 2, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "start" }}>
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ backgroundColor: "#2B1A12", borderRadius: "12px", padding: "24px" }}>
              <h2 style={{ color: "#C8A33A", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "4px" }}>Sri Viji Thanga Maaligai</h2>
              <p style={{ color: "#A08060", fontSize: "0.875rem" }}>Your trusted gold jewellery shop since 1995</p>
            </div>

            {[
              { icon: <MapPin size={18} color="#2B1A12" />, title: "Our Address", content: "171/81 Eldams Road Teynampet, Chennai, Tamil Nadu – 600018", isPhone: false },
              { icon: <Phone size={18} color="#2B1A12" />, title: "Phone", content: "+91 9840686575", isPhone: true },
            ].map((card) => (
              <div key={card.title} style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", padding: "20px", backgroundColor: "#FAF6EE" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "8px", backgroundColor: "#C8A33A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{card.icon}</div>
                  <div>
                    <h3 style={{ color: "#2B1A12", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{card.title}</h3>
                    {card.isPhone
                      ? <a href="tel:+91 9840686575" style={{ color: "#6B5A4B", fontSize: "0.875rem", textDecoration: "none" }}>{card.content}</a>
                      : <p style={{ color: "#6B5A4B", fontSize: "0.875rem", lineHeight: 1.7, whiteSpace: "pre-line", margin: 0 }}>{card.content}</p>}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", padding: "20px", backgroundColor: "#FAF6EE" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "8px", backgroundColor: "#C8A33A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Clock size={18} color="#2B1A12" /></div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: "#2B1A12", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Working Hours</h3>
                  {["Monday – Sunday", "9:30 AM – 10:00 PM"].map(([day, hours]) => (
                    <div key={day} style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                      <span style={{ color: "#6B5A4B", fontSize: "0.875rem" }}>{day}</span>
                      <span style={{ color: "#2B1A12", fontSize: "0.875rem", fontWeight: 600 }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", overflow: "hidden", height: "280px", background: "linear-gradient(135deg, #2B1A12 0%, #3A241A 50%, #6B4A1A 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <MapPin size={40} color="#C8A33A" />
              <p style={{ color: "#F7F1E4", fontSize: "1.125rem", fontWeight: 600 }}>Chennai, Tamil Nadu</p>
              <p style={{ color: "#A08060", fontSize: "0.875rem" }}>Teynampet(Royal snacks)</p>
              <a href="https://maps.google.com/?q=Kumbakonam,+Tamil+Nadu" target="_blank" rel="noopener noreferrer"
                style={{ border: "1.5px solid #C8A33A", color: "#C8A33A", borderRadius: "999px", padding: "6px 20px", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", marginTop: "8px" }}>
                Open in Maps
              </a>
            </div>

            <div style={{ background: "linear-gradient(135deg, #2B1A12 0%, #3A241A 100%)", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
              <MessageCircle size={32} color="#25D366" style={{ margin: "0 auto 12px" }} />
              <h3 style={{ color: "#F7F1E4", fontSize: "1.1rem", fontWeight: "bold", marginBottom: "8px" }}>Chat With Us</h3>
              <p style={{ color: "#A08060", fontSize: "0.875rem", marginBottom: "16px" }}>Ask about any item, price, or custom order on WhatsApp.</p>
              <a href="https://wa.me/919840686575" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block", backgroundColor: "#25D366", color: "#FFFFFF", borderRadius: "8px", padding: "12px 28px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>

            <div style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", padding: "16px 20px", backgroundColor: "#FAF6EE" }}>
              <p style={{ color: "#6B5A4B", fontSize: "0.875rem", textAlign: "center", lineHeight: 1.7 }}>
                💛 We also do <strong style={{ color: "#2B1A12" }}>custom orders</strong> for weddings and special occasions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}