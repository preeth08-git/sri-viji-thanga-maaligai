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
    <header style={{ backgroundColor: "#FAF6EE", borderBottom: "1px solid #D7C28A" }} className="sticky top-0 z-50 shadow-sm">
      <div style={{ backgroundColor: "#C8A33A" }} className="py-1 px-4 text-right">
        <span style={{ backgroundColor: "#2B1A12", color: "#F7F1E4", fontSize: "0.7rem", padding: "2px 12px", borderRadius: "999px" }}>
          Est. 1985 — Trusted Gold Jewellers
        </span>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleNav("home")} className="flex flex-col leading-none border-none bg-transparent cursor-pointer text-left">
            <span style={{ color: "#C8A33A", fontSize: "1.3rem", letterSpacing: "0.04em", fontWeight: "bold" }}>SRI VIJI</span>
            <span style={{ color: "#6B5A4B", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600 }}>Thanga Maaligai</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                style={{ 
                  color: page === link.id ? "#C8A33A" : "#6B5A4B",
                  fontWeight: page === link.id ? "600" : "400",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem"
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 bg-transparent border-none" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X color="#C8A33A" /> : <Menu color="#C8A33A" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-t border-[#D7C28A] p-4 flex flex-col gap-4">
          {links.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className="text-left py-2 bg-transparent border-none text-[#6B5A4B]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
