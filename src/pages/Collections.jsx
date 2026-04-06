import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919840686575";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const data = {
  gold: {
    label: "Gold",
    tagline: "22K & 18K BIS Hallmark Gold Jewellery",
    color: "#C8A33A",
    bg: "linear-gradient(135deg, #C8A33A 0%, #7A5010 100%)",
    lightBg: "#FAF6EE",
    categories: [
      // WOMEN
      { name: "Women's Rings",     icon: "💍", gender: "women", desc: "Engagement, wedding & daily wear rings" },
      { name: "Women's Earrings",  icon: "✨", gender: "women", desc: "Studs, jhumkas & drop earrings" },
      { name: "Women's Chains",    icon: "⛓️", gender: "women", desc: "Delicate gold chains for women" },
      { name: "Women's Necklaces", icon: "📿", gender: "women", desc: "Elegant gold necklaces for every occasion" },
      { name: "Women's Bangles",   icon: "🔱", gender: "women", desc: "Traditional & modern gold bangle sets" },
      { name: "Women's Bracelets", icon: "🌸", gender: "women", desc: "Stylish gold bracelets for women" },
      { name: "Women's Pendants",  icon: "🌟", gender: "women", desc: "God pendants & symbolic designs" },
      { name: "Women's Anklets",   icon: "🦶", gender: "women", desc: "Delicate gold anklets & payal" },
      { name: "Nose Pins",         icon: "💫", gender: "women", desc: "Traditional & modern nose pins" },
      // MEN
      { name: "Men's Rings",       icon: "💍", gender: "men",   desc: "Bold & classic rings for men" },
      { name: "Men's Chains",      icon: "⛓️", gender: "men",   desc: "Heavy gold chains for men" },
      { name: "Men's Bracelets",   icon: "💪", gender: "men",   desc: "Gold kadas & bracelets for men" },
      { name: "Men's Pendants",    icon: "🌟", gender: "men",   desc: "Spiritual & bold pendants for men" },
    ],
  },
  silver: {
    label: "Silver",
    tagline: "Pure 925 Sterling Silver Jewellery",
    color: "#8A9BB0",
    bg: "linear-gradient(135deg, #9EB3C8 0%, #3A4D5C 100%)",
    lightBg: "#F0F4F8",
    categories: [
      // WOMEN
      { name: "Women's Rings",     icon: "💍", gender: "women", desc: "Sterling silver rings for women" },
      { name: "Women's Earrings",  icon: "✨", gender: "women", desc: "Silver earrings for daily & festive wear" },
      { name: "Women's Chains",    icon: "⛓️", gender: "women", desc: "Delicate silver chains for women" },
      { name: "Women's Bracelets", icon: "🌸", gender: "women", desc: "Silver bracelets for women" },
      { name: "Women's Pendants",  icon: "🌟", gender: "women", desc: "Silver pendants for women" },
      { name: "Women's Anklets",   icon: "🦶", gender: "women", desc: "Traditional silver anklets & payal" },
      // MEN
      { name: "Men's Rings",       icon: "💍", gender: "men",   desc: "Bold sterling silver rings for men" },
      { name: "Men's Chains",      icon: "⛓️", gender: "men",   desc: "Heavy silver chains for men" },
      { name: "Men's Bracelets",   icon: "💪", gender: "men",   desc: "Silver kadas & bracelets for men" },
      { name: "Men's Pendants",    icon: "🌟", gender: "men",   desc: "Spiritual & bold silver pendants for men" },
    ],
  },
};

export default function Collections({ initialMetal = null, initialGender = null }) {
  const [selectedMetal, setSelectedMetal] = useState(initialMetal);

  const metalData = selectedMetal ? data[selectedMetal] : null;
  const accentColor = metalData?.color || "#C8A33A";

  const visibleCategories = metalData
    ? (initialGender
        ? metalData.categories.filter(c => c.gender === initialGender)
        : metalData.categories)
    : [];

  const genderLabel = initialGender === "men" ? "Men's" : initialGender === "women" ? "Women's" : "";

  return (
    <div style={{ backgroundColor: selectedMetal ? (metalData?.lightBg || "#F7F1E4") : "#F7F1E4", minHeight: "70vh", padding: "48px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          {selectedMetal && (
            <button type="button" onClick={() => setSelectedMetal(null)}
              style={{ color: accentColor, border: `1.5px solid ${accentColor}`, borderRadius: "6px", padding: "8px 16px", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "transparent", cursor: "pointer", marginBottom: "20px" }}>
              <ArrowLeft size={15} />
              Back to Metal Type
            </button>
          )}
          <p style={{ color: accentColor, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "4px" }}>
            {selectedMetal ? `${genderLabel ? genderLabel + " " : ""}${metalData.label} Collections`.toUpperCase() : "OUR COLLECTIONS"}
          </p>
          <h1 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "bold" }}>
            {selectedMetal
              ? `${genderLabel ? genderLabel + " " : ""}${metalData.label} Jewellery`
              : (genderLabel ? `${genderLabel} Jewellery` : "Choose Your Collection")}
          </h1>
          {!selectedMetal && (
            <p style={{ color: "#6B5A4B", fontSize: "0.9rem", marginTop: "8px" }}>
              Select a metal type, then tap any category to enquire on WhatsApp instantly.
            </p>
          )}
          <div style={{ width: 50, height: 3, backgroundColor: accentColor, borderRadius: 2, marginTop: "12px" }} />
        </div>

        {/* Metal Selection */}
        {!selectedMetal && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px", maxWidth: "640px", margin: "0 auto" }}>
            {/* Gold Card */}
            <button type="button" onClick={() => setSelectedMetal("gold")}
              style={{ border: "none", borderRadius: "16px", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", boxShadow: "0 8px 32px rgba(200,163,58,0.25)" }}>
              <div style={{ height: "180px", background: data.gold.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff8e7", fontSize: "2.2rem", fontWeight: 800, letterSpacing: "0.1em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>GOLD</span>
              </div>
              <div style={{ padding: "18px 20px", backgroundColor: "#FDF8EC", borderTop: "2px solid #C8A33A" }}>
                <h3 style={{ color: "#2B1A12", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Gold Jewellery</h3>
                <p style={{ color: "#6B5A4B", fontSize: "0.8rem", marginBottom: "14px" }}>{data.gold.tagline}</p>
                <span style={{ backgroundColor: "#C8A33A", color: "#2B1A12", borderRadius: "999px", padding: "7px 24px", fontSize: "0.84rem", fontWeight: 700, display: "inline-block" }}>Explore Gold →</span>
              </div>
            </button>

            {/* Silver Card */}
            <button type="button" onClick={() => setSelectedMetal("silver")}
              style={{ border: "none", borderRadius: "16px", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", boxShadow: "0 8px 32px rgba(100,140,170,0.2)" }}>
              <div style={{ height: "180px", background: data.silver.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#f0f6ff", fontSize: "2.2rem", fontWeight: 800, letterSpacing: "0.1em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>SILVER</span>
              </div>
              <div style={{ padding: "18px 20px", backgroundColor: "#F0F5FA", borderTop: "2px solid #8A9BB0" }}>
                <h3 style={{ color: "#1A2B3C", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Silver Jewellery</h3>
                <p style={{ color: "#4A6070", fontSize: "0.8rem", marginBottom: "14px" }}>{data.silver.tagline}</p>
                <span style={{ backgroundColor: "#8A9BB0", color: "#fff", borderRadius: "999px", padding: "7px 24px", fontSize: "0.84rem", fontWeight: 700, display: "inline-block" }}>Explore Silver →</span>
              </div>
            </button>
          </div>
        )}

        {/* Categories Grid — each card is a WhatsApp link */}
        {selectedMetal && metalData && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {visibleCategories.map((cat) => {
              const waMsg = `Hi, I'm interested in ${cat.name} (${metalData.label}). Please share available designs and pricing.`;
              return (
                <a key={cat.name} href={waLink(waMsg)} target="_blank" rel="noopener noreferrer"
                  style={{ border: `1.5px solid ${accentColor}40`, borderRadius: "12px", backgroundColor: metalData.lightBg, overflow: "hidden", cursor: "pointer", width: "100%", textDecoration: "none", display: "block" }}>
                  <div style={{ height: "130px", background: selectedMetal === "gold" ? "linear-gradient(135deg, #C8A33A 0%, #7A5010 100%)" : "linear-gradient(135deg, #9EB3C8 0%, #3A4D5C 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                    {cat.icon}
                  </div>
                  <div style={{ padding: "18px 20px", textAlign: "center" }}>
                    <h3 style={{ color: "#2B1A12", fontSize: "0.95rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{cat.name}</h3>
                    <p style={{ color: "#6B5A4B", fontSize: "0.75rem", marginBottom: "16px" }}>{cat.desc}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#25D366", color: "#fff", borderRadius: "999px", padding: "7px 20px", fontSize: "0.82rem", fontWeight: 700 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Enquire on WhatsApp
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}