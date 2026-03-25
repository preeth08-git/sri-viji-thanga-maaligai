import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "collections", label: "Collections" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id) => {
    setPage(id);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header style={{ backgroundColor: "#FAF6EE", borderBottom: "1px solid #D7C28A", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ backgroundColor: "#C8A33A", padding: "4px 16px", textAlign: "right" }}>
        <span style={{ backgroundColor: "#2B1A12", color: "#F7F1E4", fontSize: "0.7rem", padding: "2px 12px", borderRadius: "999px" }}>
          Est. 1985 — Trusted Gold Jewellers
        </span>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <button onClick={() => handleNav("home")} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
            <span style={{ color: "#C8A33A", fontSize: "1.3rem", fontWeight: "bold", display: "block" }}>SRI VIJI</span>
            <span style={{ color: "#6B5A4B", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>Thanga Maaligai</span>
          </button>

          <nav style={{ display: "flex", gap: "12px" }} className="desktop-nav">
            {links.map((link) => (
              <button key={link.id} onClick={() => handleNav(link.id)}
                style={{ 
                  border: "1.5px solid #C8A33A", 
                  color: page === link.id ? "#FAF6EE" : "#2B1A12", 
                  backgroundColor: page === link.id ? "#C8A33A" : "transparent", 
                  borderRadius: "999px", padding: "6px 20px", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" 
                }}>
                {link.label}
              </button>
            ))}
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer" }} className="mobile-toggle">
            {mobileOpen ? <X size={24} color="#C8A33A" /> : <Menu size={24} color="#C8A33A" />}
          </button>
        </div>
      </div>
      <style>{`
        .mobile-toggle { display: none; }
        @media (max-width: 768px) { .desktop-nav { display: none; } .mobile-toggle { display: block; } }
      `}</style>
    </header>
  );
}
