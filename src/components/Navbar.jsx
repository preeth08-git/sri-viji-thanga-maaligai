import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ page, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { key: "home", label: "Home" },
    { key: "collections", label: "Collections" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <header
      style={{ backgroundColor: "#FAF6EE", borderBottom: "1px solid #D7C28A" }}
      className="sticky top-0 z-50 shadow-sm"
    >
      <div style={{ backgroundColor: "#C8A33A" }} className="py-1 px-4 text-right">
        <span style={{ backgroundColor: "#2B1A12", color: "#F7F1E4", fontSize: "0.7rem", padding: "2px 12px", borderRadius: "999px" }}>
          Est. 1985 — Trusted Gold Jewellers
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => navigate("home")} className="flex flex-col leading-none" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <span style={{ color: "#C8A33A", fontSize: "1.3rem", letterSpacing: "0.04em", fontWeight: "bold" }}>SRI VIJI</span>
            <span style={{ color: "#6B5A4B", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600 }}>Thanga Maaligai</span>
          </button>

          <nav className="hidden md:flex items-center gap-3">
            {links.map((link) => {
              const isActive = page === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => navigate(link.key)}
                  style={{
                    border: "1.5px solid #C8A33A",
                    color: isActive ? "#FAF6EE" : "#2B1A12",
                    backgroundColor: isActive ? "#C8A33A" : "transparent",
                    borderRadius: "999px",
                    padding: "6px 20px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-md"
            style={{ color: "#2B1A12", background: "none", border: "none" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2" style={{ borderTop: "1px solid #D7C28A" }}>
            {links.map((link) => {
              const isActive = page === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => { navigate(link.key); setMobileOpen(false); }}
                  style={{
                    border: "1.5px solid #C8A33A",
                    color: isActive ? "#FAF6EE" : "#2B1A12",
                    backgroundColor: isActive ? "#C8A33A" : "transparent",
                    borderRadius: "999px",
                    padding: "8px 20px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textAlign: "center",
                    marginTop: "6px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
