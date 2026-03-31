import { ArrowLeft, X, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

const data = {
  gold: {
    label: "Gold",
    tagline: "22K & 18K BIS Hallmark Gold Jewellery",
    color: "#C8A33A",
    bg: "linear-gradient(135deg, #C8A33A 0%, #7A5010 100%)",
    lightBg: "#FAF6EE",
    categories: [
      // WOMEN
      {
        name: "Women's Rings", icon: "💍", description: "Engagement, wedding & daily wear rings",
        gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)", gender: "women",
        items: [
          { id: 1, name: "Diamond Solitaire Ring", weight: "4.8g", karat: "22K Gold", image: "/rings/women-ring1.png" },
          { id: 2, name: "Emerald Cut Ring", weight: "5.2g", karat: "22K Gold", image: "/rings/women-ring2.png" },
          { id: 3, name: "Twisted Diamond Ring", weight: "6.1g", karat: "22K Gold", image: "/rings/women-ring3.png" },
          { id: 4, name: "Double Heart Ring", weight: "3.9g", karat: "22K Gold", image: "/rings/women-ring4.png" },
        ],
      },
      {
        name: "Women's Earrings", icon: "✨", description: "Studs, jhumkas & drop earrings",
        gradient: "linear-gradient(135deg, #D4AF50 0%, #8B6914 100%)", gender: "women",
        items: [
          { id: 1, name: "Gold Jhumkas", weight: "8.5g", karat: "22K Gold", image: null },
          { id: 2, name: "Diamond Studs", weight: "3.2g", karat: "18K Gold", image: null },
          { id: 3, name: "Chandbali Earrings", weight: "12.0g", karat: "22K Gold", image: null },
          { id: 4, name: "Hoop Earrings", weight: "6.8g", karat: "22K Gold", image: null },
        ],
      },
      {
        name: "Women's Chains", icon: "⛓️", description: "Delicate gold chains for women",
        gradient: "linear-gradient(135deg, #D2B04C 0%, #9A7520 100%)", gender: "women",
        items: [
          { id: 1, name: "Box Chain Necklace", weight: "12.5g", karat: "22K Gold", image: null },
          { id: 2, name: "Singapore Chain", weight: "10.4g", karat: "18K Gold", image: null },
          { id: 3, name: "Flat Curb Chain", weight: "18.2g", karat: "22K Gold", image: null },
          { id: 4, name: "Rope Chain", weight: "15.8g", karat: "22K Gold", image: null },
        ],
      },
      {
        name: "Women's Necklaces", icon: "📿", description: "Elegant gold necklaces for every occasion",
        gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)", gender: "women",
        items: [
          { id: 1, name: "Lakshmi Pendant Necklace", weight: "28.5g", karat: "22K Gold", image: null },
          { id: 2, name: "Traditional Thali Set", weight: "35.0g", karat: "22K Gold", image: null },
          { id: 3, name: "Kundan Necklace", weight: "42.2g", karat: "22K Gold", image: null },
          { id: 4, name: "Simple Gold Choker", weight: "18.8g", karat: "18K Gold", image: null },
        ],
      },
      {
        name: "Women's Bangles", icon: "🔱", description: "Traditional & modern gold bangle sets",
        gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)", gender: "women",
        items: [
          { id: 1, name: "Plain Gold Bangle", weight: "20.0g", karat: "22K Gold", image: null },
          { id: 2, name: "Patterned Bangle Set", weight: "45.0g", karat: "22K Gold", image: null },
          { id: 3, name: "Kada Bangle", weight: "32.5g", karat: "22K Gold", image: null },
          { id: 4, name: "Twisted Bangle", weight: "22.8g", karat: "18K Gold", image: null },
        ],
      },
      {
        name: "Women's Bracelets", icon: "🌸", description: "Stylish gold bracelets for women",
        gradient: "linear-gradient(135deg, #C8A33A 0%, #7A5010 100%)", gender: "women",
        items: [
          { id: 1, name: "Classic Gold Bracelet", weight: "14.0g", karat: "22K Gold", image: null },
          { id: 2, name: "Tennis Bracelet", weight: "10.5g", karat: "18K Gold", image: null },
          { id: 3, name: "Charm Bracelet", weight: "8.2g", karat: "22K Gold", image: null },
          { id: 4, name: "Stone Bracelet", weight: "12.0g", karat: "22K Gold", image: null },
        ],
      },
      {
        name: "Women's Pendants", icon: "🌟", description: "God pendants & symbolic designs for women",
        gradient: "linear-gradient(135deg, #D2B04C 0%, #6B4F0A 100%)", gender: "women",
        items: [
          { id: 1, name: "Lakshmi Pendant", weight: "7.2g", karat: "22K Gold", image: null },
          { id: 2, name: "Heart Pendant", weight: "3.5g", karat: "18K Gold", image: null },
          { id: 3, name: "Ganesha Pendant", weight: "5.5g", karat: "22K Gold", image: null },
          { id: 4, name: "Om Pendant", weight: "4.8g", karat: "22K Gold", image: null },
        ],
      },
      {
        name: "Women's Anklets", icon: "🦶", description: "Delicate gold anklets & payal",
        gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5010 100%)", gender: "women",
        items: [
          { id: 1, name: "Plain Gold Anklet", weight: "8.0g", karat: "22K Gold", image: null },
          { id: 2, name: "Stone Anklet", weight: "10.5g", karat: "22K Gold", image: null },
          { id: 3, name: "Chain Anklet", weight: "6.8g", karat: "18K Gold", image: null },
          { id: 4, name: "Bell Anklet", weight: "9.2g", karat: "22K Gold", image: null },
        ],
      },
      {
        name: "Nose Pins", icon: "💫", description: "Traditional & modern nose pins",
        gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)", gender: "women",
        items: [
          { id: 1, name: "Plain Nose Pin", weight: "0.5g", karat: "22K Gold", image: null },
          { id: 2, name: "Diamond Nose Pin", weight: "0.8g", karat: "18K Gold", image: null },
          { id: 3, name: "Stone Nose Pin", weight: "0.6g", karat: "22K Gold", image: null },
          { id: 4, name: "Screw Nose Pin", weight: "0.4g", karat: "22K Gold", image: null },
        ],
      },
      // MEN
      {
        name: "Men's Rings", icon: "💍", description: "Bold & classic rings for men",
        gradient: "linear-gradient(135deg, #A07820 0%, #5A3A08 100%)", gender: "men",
        items: [
          { id: 1, name: "Men's Band Ring", weight: "6.0g", karat: "22K Gold", image: null },
          { id: 2, name: "Men's Signet Ring", weight: "8.5g", karat: "22K Gold", image: null },
          { id: 3, name: "Men's Stone Ring", weight: "7.2g", karat: "22K Gold", image: null },
          { id: 4, name: "Men's Kada Ring", weight: "10.0g", karat: "22K Gold", image: null },
        ],
      },
      {
        name: "Men's Chains", icon: "⛓️", description: "Heavy gold chains for men",
        gradient: "linear-gradient(135deg, #A07820 0%, #5A3A08 100%)", gender: "men",
        items: [
          { id: 1, name: "Heavy Curb Chain", weight: "25.0g", karat: "22K Gold", image: null },
          { id: 2, name: "Thick Rope Chain", weight: "30.0g", karat: "22K Gold", image: null },
          { id: 3, name: "Franco Chain", weight: "22.5g", karat: "22K Gold", image: null },
          { id: 4, name: "Wheat Chain", weight: "18.0g", karat: "22K Gold", image: null },
        ],
      },
      {
        name: "Men's Bracelets", icon: "💪", description: "Gold kadas & bracelets for men",
        gradient: "linear-gradient(135deg, #A07820 0%, #5A3A08 100%)", gender: "men",
        items: [
          { id: 1, name: "Men's Gold Kada", weight: "30.0g", karat: "22K Gold", image: null },
          { id: 2, name: "Men's Link Bracelet", weight: "18.0g", karat: "22K Gold", image: null },
          { id: 3, name: "Men's Curb Bracelet", weight: "22.0g", karat: "22K Gold", image: null },
          { id: 4, name: "Men's Figaro Bracelet", weight: "20.0g", karat: "18K Gold", image: null },
        ],
      },
      {
        name: "Men's Pendants", icon: "🌟", description: "Spiritual & bold pendants for men",
        gradient: "linear-gradient(135deg, #A07820 0%, #5A3A08 100%)", gender: "men",
        items: [
          { id: 1, name: "Ganesha Pendant", weight: "6.5g", karat: "22K Gold", image: null },
          { id: 2, name: "Om Pendant", weight: "5.5g", karat: "22K Gold", image: null },
          { id: 3, name: "Cross Pendant", weight: "4.8g", karat: "22K Gold", image: null },
          { id: 4, name: "Lion Pendant", weight: "8.0g", karat: "22K Gold", image: null },
        ],
      },
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
      {
        name: "Women's Rings", icon: "💍", description: "Sterling silver rings for women",
        gradient: "linear-gradient(135deg, #9EB3C8 0%, #4A6275 100%)", gender: "women",
        items: [
          { id: 1, name: "Silver Toe Ring", weight: "2.1g", karat: "925 Silver", image: null },
          { id: 2, name: "Oxidised Silver Ring", weight: "3.5g", karat: "925 Silver", image: null },
          { id: 3, name: "Stone Silver Ring", weight: "4.0g", karat: "925 Silver", image: null },
          { id: 4, name: "Floral Silver Ring", weight: "2.8g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Women's Earrings", icon: "✨", description: "Silver earrings for daily & festive wear",
        gradient: "linear-gradient(135deg, #9AAFC4 0%, #3D5060 100%)", gender: "women",
        items: [
          { id: 1, name: "Silver Jhumkas", weight: "6.5g", karat: "925 Silver", image: null },
          { id: 2, name: "Stud Earrings", weight: "2.0g", karat: "925 Silver", image: null },
          { id: 3, name: "Hoop Earrings", weight: "4.5g", karat: "925 Silver", image: null },
          { id: 4, name: "Chandbali Earrings", weight: "8.0g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Women's Chains", icon: "⛓️", description: "Delicate silver chains for women",
        gradient: "linear-gradient(135deg, #A8BFD0 0%, #506070 100%)", gender: "women",
        items: [
          { id: 1, name: "Silver Box Chain", weight: "10.5g", karat: "925 Silver", image: null },
          { id: 2, name: "Rolo Chain", weight: "12.0g", karat: "925 Silver", image: null },
          { id: 3, name: "Singapore Chain", weight: "9.8g", karat: "925 Silver", image: null },
          { id: 4, name: "Thin Rope Chain", weight: "8.5g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Women's Bracelets", icon: "🌸", description: "Silver bracelets for women",
        gradient: "linear-gradient(135deg, #9EB3C8 0%, #4A6275 100%)", gender: "women",
        items: [
          { id: 1, name: "Charm Bracelet", weight: "12.0g", karat: "925 Silver", image: null },
          { id: 2, name: "Oxidised Bracelet", weight: "15.5g", karat: "925 Silver", image: null },
          { id: 3, name: "Chain Bracelet", weight: "10.0g", karat: "925 Silver", image: null },
          { id: 4, name: "Floral Bracelet", weight: "11.0g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Women's Pendants", icon: "🌟", description: "Silver pendants for women",
        gradient: "linear-gradient(135deg, #A8BFD0 0%, #3D5060 100%)", gender: "women",
        items: [
          { id: 1, name: "Lakshmi Silver Pendant", weight: "6.0g", karat: "925 Silver", image: null },
          { id: 2, name: "Heart Pendant", weight: "3.8g", karat: "925 Silver", image: null },
          { id: 3, name: "Oxidised Pendant", weight: "7.0g", karat: "925 Silver", image: null },
          { id: 4, name: "Moon & Star Pendant", weight: "4.5g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Women's Anklets", icon: "🦶", description: "Traditional silver anklets & payal",
        gradient: "linear-gradient(135deg, #B0C8D8 0%, #4A6070 100%)", gender: "women",
        items: [
          { id: 1, name: "Plain Silver Anklet", weight: "15.0g", karat: "925 Silver", image: null },
          { id: 2, name: "Ghungroo Payal", weight: "22.0g", karat: "925 Silver", image: null },
          { id: 3, name: "Leaf Design Anklet", weight: "18.5g", karat: "925 Silver", image: null },
          { id: 4, name: "Oxidised Payal", weight: "20.0g", karat: "925 Silver", image: null },
        ],
      },
      // MEN
      {
        name: "Men's Rings", icon: "💍", description: "Bold sterling silver rings for men",
        gradient: "linear-gradient(135deg, #607080 0%, #2A3A48 100%)", gender: "men",
        items: [
          { id: 1, name: "Men's Band Ring", weight: "5.5g", karat: "925 Silver", image: null },
          { id: 2, name: "Men's Signet Ring", weight: "8.0g", karat: "925 Silver", image: null },
          { id: 3, name: "Men's Stone Ring", weight: "6.5g", karat: "925 Silver", image: null },
          { id: 4, name: "Men's Oxidised Ring", weight: "4.8g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Men's Chains", icon: "⛓️", description: "Heavy silver chains for men",
        gradient: "linear-gradient(135deg, #607080 0%, #2A3A48 100%)", gender: "men",
        items: [
          { id: 1, name: "Heavy Curb Chain", weight: "28.0g", karat: "925 Silver", image: null },
          { id: 2, name: "Figaro Chain", weight: "22.0g", karat: "925 Silver", image: null },
          { id: 3, name: "Franco Chain", weight: "25.0g", karat: "925 Silver", image: null },
          { id: 4, name: "Wheat Chain", weight: "18.0g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Men's Bracelets", icon: "💪", description: "Silver kadas & bracelets for men",
        gradient: "linear-gradient(135deg, #607080 0%, #2A3A48 100%)", gender: "men",
        items: [
          { id: 1, name: "Silver Kada", weight: "25.0g", karat: "925 Silver", image: null },
          { id: 2, name: "Men's Link Bracelet", weight: "18.0g", karat: "925 Silver", image: null },
          { id: 3, name: "Men's Oxidised Bracelet", weight: "20.0g", karat: "925 Silver", image: null },
          { id: 4, name: "Men's Chain Bracelet", weight: "15.0g", karat: "925 Silver", image: null },
        ],
      },
      {
        name: "Men's Pendants", icon: "🌟", description: "Spiritual & bold silver pendants for men",
        gradient: "linear-gradient(135deg, #607080 0%, #2A3A48 100%)", gender: "men",
        items: [
          { id: 1, name: "Ganesha Silver Pendant", weight: "7.0g", karat: "925 Silver", image: null },
          { id: 2, name: "Om Silver Pendant", weight: "5.5g", karat: "925 Silver", image: null },
          { id: 3, name: "Cross Pendant", weight: "4.5g", karat: "925 Silver", image: null },
          { id: 4, name: "Lion Pendant", weight: "9.0g", karat: "925 Silver", image: null },
        ],
      },
    ],
  },
};

export default function Collections({ initialMetal = null, initialGender = null }) {
  const [view, setView] = useState(initialMetal ? "categories" : "metal");
  const [selectedMetal, setSelectedMetal] = useState(initialMetal);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const metalData = selectedMetal ? data[selectedMetal] : null;
  const accentColor = metalData?.color || "#C8A33A";

  const visibleCategories = metalData
    ? (initialGender
        ? metalData.categories.filter(c => c.gender === initialGender)
        : metalData.categories)
    : [];

  const goBack = () => {
    if (view === "items") { setView("categories"); setSelectedCategory(null); }
    else if (view === "categories") { setView("metal"); setSelectedMetal(null); }
  };

  const genderLabel = initialGender === "men" ? "Men's" : initialGender === "women" ? "Women's" : "";

  const pageTitle = view === "metal"
    ? (genderLabel ? `${genderLabel} Jewellery` : "Choose Your Collection")
    : view === "categories"
    ? (metalData ? `${genderLabel ? genderLabel + " " : ""}${metalData.label} Jewellery` : "")
    : `${selectedCategory?.name} — ${metalData?.label}`;

  const metalLabel = view === "metal"
    ? (genderLabel ? `${genderLabel} Collections`.toUpperCase() : "OUR COLLECTIONS")
    : view === "categories"
    ? (metalData ? `${genderLabel ? genderLabel + " " : ""}${metalData.label} Collections`.toUpperCase() : "")
    : selectedCategory?.name?.toUpperCase() || "";

  return (
    <div style={{ backgroundColor: view === "metal" ? "#F7F1E4" : (metalData?.lightBg || "#F7F1E4"), minHeight: "70vh", padding: "48px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          {view !== "metal" && (
            <button type="button" onClick={goBack}
              style={{ color: accentColor, border: `1.5px solid ${accentColor}`, borderRadius: "6px", padding: "8px 16px", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "transparent", cursor: "pointer", marginBottom: "20px" }}>
              <ArrowLeft size={15} />
              {view === "categories" ? "Back to Metal Type" : "Back to Categories"}
            </button>
          )}
          <p style={{ color: accentColor, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "4px" }}>
            {metalLabel}
          </p>
          <h1 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "bold" }}>
            {pageTitle}
          </h1>
          {view === "metal" && (
            <p style={{ color: "#6B5A4B", fontSize: "0.9rem", marginTop: "8px" }}>
              {initialGender ? `Select a metal type to browse ${genderLabel.toLowerCase()} jewellery` : "Select a metal type to explore our jewellery"}
            </p>
          )}
          <div style={{ width: 50, height: 3, backgroundColor: accentColor, borderRadius: 2, marginTop: "12px" }} />
        </div>

        {/* Metal Selection */}
        {view === "metal" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px", maxWidth: "640px", margin: "0 auto" }}>
            <button type="button" onClick={() => { setSelectedMetal("gold"); setView("categories"); }}
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

            <button type="button" onClick={() => { setSelectedMetal("silver"); setView("categories"); }}
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

        {/* Categories Grid */}
        {view === "categories" && metalData && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {visibleCategories.map((cat) => (
              <button key={cat.name} type="button"
                onClick={() => { setSelectedCategory(cat); setView("items"); }}
                style={{ border: `1.5px solid ${accentColor}40`, borderRadius: "12px", backgroundColor: metalData.lightBg, overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}>
                <div style={{ height: "160px", background: cat.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>{cat.icon}</div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3 style={{ color: "#2B1A12", fontSize: "0.95rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{cat.name}</h3>
                  <p style={{ color: "#6B5A4B", fontSize: "0.75rem", marginBottom: "16px" }}>{cat.description}</p>
                  <span style={{ border: `1.5px solid ${accentColor}`, color: accentColor, borderRadius: "999px", padding: "6px 20px", fontSize: "0.82rem", fontWeight: 600, display: "inline-block" }}>Browse</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Items Grid */}
        {view === "items" && selectedCategory && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
            {selectedCategory.items.map((item) => (
              <button key={item.id} type="button"
                onClick={() => setSelectedItem(item)}
                style={{ border: `1.5px solid ${accentColor}40`, borderRadius: "10px", backgroundColor: metalData?.lightBg, overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}>
                {item.image ? (
                  <div style={{ height: "140px", backgroundColor: "#F0E8D4", overflow: "hidden" }}>
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <div style={{ height: "140px", background: selectedCategory.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>{selectedCategory.icon}</div>
                )}
                <div style={{ padding: "12px", textAlign: "center" }}>
                  <h4 style={{ color: "#2B1A12", fontSize: "0.75rem", fontWeight: 600, marginBottom: "4px" }}>{item.name}</h4>
                  <p style={{ color: "#6B5A4B", fontSize: "0.72rem" }}>{item.karat} · {item.weight}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <>
          <div onClick={() => setSelectedItem(null)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(20,10,0,0.92)", zIndex: 100, backdropFilter: "blur(4px)" }} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: metalData?.lightBg || "#FAF6EE", border: `1.5px solid ${accentColor}60`, borderRadius: "16px", overflow: "hidden", zIndex: 101, width: "min(460px, 96vw)", maxHeight: "92vh", overflowY: "auto", boxShadow: "0 32px 80px rgba(20,10,0,0.7)" }}>
            <button type="button" onClick={() => setSelectedItem(null)}
              style={{ position: "absolute", top: "12px", right: "12px", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(43,26,18,0.8)", color: "#F7F1E4", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
              <X size={16} />
            </button>
            {selectedItem.image ? (
              <div style={{ height: "240px", backgroundColor: "#1a0f08", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={selectedItem.image} alt={selectedItem.name} style={{ maxHeight: "220px", maxWidth: "90%", objectFit: "contain" }} />
              </div>
            ) : (
              <div style={{ height: "220px", background: selectedCategory?.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>{selectedCategory?.icon}</div>
            )}
            <div style={{ padding: "18px 24px 28px" }}>
              <h3 style={{ color: "#2B1A12", fontSize: "1.15rem", fontWeight: "bold", marginBottom: "4px" }}>{selectedItem.name}</h3>
              <div style={{ width: 40, height: 2, backgroundColor: accentColor, borderRadius: 1, marginBottom: "16px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "18px" }}>
                {[{ label: "Karat", value: selectedItem.karat }, { label: "Weight", value: selectedItem.weight }, { label: "Purity", value: "BIS Hallmark" }, { label: "Finish", value: "High Polish" }].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderRadius: "6px", backgroundColor: `${accentColor}15` }}>
                    <span style={{ color: "#6B5A4B", fontSize: "0.85rem", fontWeight: 500 }}>{row.label}</span>
                    <span style={{ color: "#2B1A12", fontSize: "0.85rem", fontWeight: 700 }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/919840686575" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#25D366", color: "#FFFFFF", borderRadius: "10px", padding: "13px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}