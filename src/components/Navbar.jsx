import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "collections", label: "Collections" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header style={{ backgroundColor: "#FAF6EE", borderBottom: "1px solid #D7C28A", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ backgroundColor: "#C8A33A", padding: "4px 16px", textAlign: "right" }}>
        <span style={{ backgroundColor: "#2B1A12", color: "#F7F1E4", fontSize: "0.7rem", padding: "2px 12px", borderRadius: "999px" }}>
          Est. 1985 — Trusted Gold Jewellers
        </span>
      </div>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Shop Name with Marquee — full name, full size */}
          <button type="button" onClick={() => setPage("home")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, width: "220px", overflow: "hidden" }}>
            <marquee behavior="scroll" direction="left" scrollamount="3" style={{ display: "block" }}>
              <span style={{ color: "#C8A33A", fontSize: "1.3rem", letterSpacing: "0.04em", fontWeight: "bold", marginRight: "48px", whiteSpace: "nowrap" }}>
                SRI VIJI THANGA MAALIGAI
              </span>
            </marquee>
          </button>

          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {links.map((link) => (
              <button key={link.id} type="button" onClick={() => setPage(link.id)}
                style={{ border: "1.5px solid #C8A33A", color: page === link.id ? "#FAF6EE" : "#2B1A12", backgroundColor: page === link.id ? "#C8A33A" : "transparent", borderRadius: "999px", padding: "6px 20px", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>
                {link.label}
              </button>
            ))}
          </nav>
          <button type="button" className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#2B1A12", padding: "8px", display: "none" }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <nav style={{ borderTop: "1px solid #D7C28A", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {links.map((link) => (
              <button key={link.id} type="button" onClick={() => { setPage(link.id); setMobileOpen(false); }}
                style={{ border: "1.5px solid #C8A33A", color: page === link.id ? "#FAF6EE" : "#2B1A12", backgroundColor: page === link.id ? "#C8A33A" : "transparent", borderRadius: "999px", padding: "8px 20px", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", marginTop: "6px", textAlign: "center" }}>
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
      <style>{`@media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }`}</style>
    </header>
  );
}