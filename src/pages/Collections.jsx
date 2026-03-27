import { ArrowLeft, X, RotateCcw } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";

function Ring3DViewer({ image }) {
  const mountRef = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const width = mount.clientWidth || 380;
    const height = 280;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#110a04");

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // Lighting — warm gold studio look
    scene.add(new THREE.AmbientLight(0xfff0cc, 0.5));

    const keyLight = new THREE.DirectionalLight(0xffd97a, 2.5);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xC8A33A, 1.2, 20);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffe0a0, 0.8);
    rimLight.position.set(-3, -2, -4);
    scene.add(rimLight);

    // Ring geometry — torus shape
    const ringGeo = new THREE.TorusGeometry(1, 0.28, 64, 128);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xC8A33A,
      metalness: 0.95,
      roughness: 0.08,
      envMapIntensity: 1.0,
    });

    // Load ring image as texture on the band surface
    const loader = new THREE.TextureLoader();
    loader.load(image, (tex) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(4, 1);
      ringMat.map = tex;
      ringMat.metalness = 0.7;
      ringMat.roughness = 0.2;
      ringMat.needsUpdate = true;
    });

    // Stone on top of ring
    const stoneGeo = new THREE.OctahedronGeometry(0.22, 2);
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.0,
      roughness: 0.0,
      transparent: true,
      opacity: 0.85,
    });
    const stone = new THREE.Mesh(stoneGeo, stoneMat);
    stone.position.set(0, 1.02, 0);
    stone.rotation.x = Math.PI / 6;
    stone.scale.set(1, 0.65, 1);

    // Stone prongs (4 small cylinders)
    const prongMat = new THREE.MeshStandardMaterial({ color: 0xC8A33A, metalness: 0.95, roughness: 0.1 });
    const prongs = [];
    for (let i = 0; i < 4; i++) {
      const pg = new THREE.CylinderGeometry(0.03, 0.03, 0.22, 8);
      const pm = new THREE.Mesh(pg, prongMat);
      const angle = (i / 4) * Math.PI * 2;
      pm.position.set(Math.cos(angle) * 0.18, 0.95, Math.sin(angle) * 0.18);
      prongs.push(pm);
    }

    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;

    const group = new THREE.Group();
    group.add(ring);
    group.add(stone);
    prongs.forEach((p) => group.add(p));
    group.rotation.x = -0.2;
    scene.add(group);

    // Drag interaction
    let isDragging = false;
    let prev = { x: 0, y: 0 };
    stateRef.current.group = group;

    const onDown = (x, y) => { isDragging = true; prev = { x, y }; };
    const onMove = (x, y) => {
      if (!isDragging) return;
      group.rotation.y += (x - prev.x) * 0.012;
      group.rotation.x += (y - prev.y) * 0.012;
      group.rotation.x = Math.max(-1.2, Math.min(1.2, group.rotation.x));
      prev = { x, y };
    };
    const onUp = () => { isDragging = false; };

    const canvas = renderer.domElement;
    canvas.addEventListener("mousedown", (e) => onDown(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("touchstart", (e) => { e.preventDefault(); onDown(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
    window.addEventListener("touchmove", (e) => onMove(e.touches[0].clientX, e.touches[0].clientY));
    window.addEventListener("touchend", onUp);

    // Auto-spin when idle
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isDragging) group.rotation.y += 0.006;
      renderer.render(scene, camera);
    };
    animate();

    stateRef.current.reset = () => {
      group.rotation.set(-0.2, 0, 0);
    };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", (e) => onMove(e.touches[0].clientX, e.touches[0].clientY));
      window.removeEventListener("touchend", onUp);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      stoneGeo.dispose();
      stoneMat.dispose();
      prongMat.dispose();
    };
  }, [image]);

  return (
    <div>
      <div
        ref={mountRef}
        style={{ width: "100%", cursor: "grab", touchAction: "none" }}
      />
      <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
        <button
          type="button"
          onClick={() => stateRef.current.reset?.()}
          style={{ background: "none", border: "1px solid #C8A33A", color: "#C8A33A", borderRadius: "999px", padding: "4px 14px", fontSize: "0.72rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px" }}
        >
          <RotateCcw size={11} /> Reset
        </button>
        <p style={{ color: "rgba(215,194,138,0.55)", fontSize: "0.68rem", marginTop: "4px" }}>Drag to rotate · Auto-spins when idle</p>
      </div>
    </div>
  );
}

const categories = [
  {
    name: "Rings",
    icon: "💍",
    description: "Engagement, wedding & daily wear rings",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)",
    items: [
      { id: 1, name: "Diamond Solitaire Ring", weight: "4.8g", karat: "22K Gold", image: "/rings/ring1.png" },
      { id: 2, name: "Emerald Cut Ring", weight: "5.2g", karat: "22K Gold", image: "/rings/ring2.png" },
      { id: 3, name: "Twisted Diamond Ring", weight: "6.1g", karat: "22K Gold", image: "/rings/ring3.png" },
      { id: 4, name: "Double Heart Ring", weight: "3.9g", karat: "22K Gold", image: "/rings/ring4.png" },
    ],
  },
  {
    name: "Chains",
    icon: "⛓️",
    description: "Gold chains in various lengths & styles",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #D2B04C 0%, #9A7520 100%)",
    items: [
      { id: 1, name: "Box Chain Necklace", weight: "12.5g", karat: "22K Gold", image: null },
      { id: 2, name: "Rope Chain", weight: "15.8g", karat: "22K Gold", image: null },
      { id: 3, name: "Flat Curb Chain", weight: "18.2g", karat: "22K Gold", image: null },
      { id: 4, name: "Singapore Chain", weight: "10.4g", karat: "18K Gold", image: null },
    ],
  },
  {
    name: "Bangles",
    icon: "✨",
    description: "Traditional & modern bangle sets",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)",
    items: [
      { id: 1, name: "Plain Gold Bangle", weight: "20.0g", karat: "22K Gold", image: null },
      { id: 2, name: "Patterned Bangle Set", weight: "45.0g", karat: "22K Gold", image: null },
      { id: 3, name: "Kada Bangle", weight: "32.5g", karat: "22K Gold", image: null },
      { id: 4, name: "Twisted Bangle", weight: "22.8g", karat: "18K Gold", image: null },
    ],
  },
  {
    name: "Necklaces",
    icon: "📿",
    description: "Elegant necklaces for every occasion",
    itemCount: 4,
    gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)",
    items: [
      { id: 1, name: "Lakshmi Pendant Necklace", weight: "28.5g", karat: "22K Gold", image: null },
      { id: 2, name: "Traditional Thali Set", weight: "35.0g", karat: "22K Gold", image: null },
      { id: 3, name: "Kundan Necklace", weight: "42.2g", karat: "22K Gold", image: null },
      { id: 4, name: "Simple Gold Choker", weight: "18.8g", karat: "18K Gold", image: null },
    ],
  },
];

export default function Collections() {
  const [view, setView] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ backgroundColor: "#F7F1E4", minHeight: "70vh", padding: "48px 0" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: "40px" }}>
          {view === "items" && (
            <button
              type="button"
              onClick={() => { setView("categories"); setSelectedCategory(null); }}
              style={{ color: "#C8A33A", border: "1.5px solid #C8A33A", borderRadius: "6px", padding: "8px 16px", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "transparent", cursor: "pointer", marginBottom: "20px" }}
            >
              <ArrowLeft size={15} /> Back to Categories
            </button>
          )}
          <p style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "4px" }}>
            {view === "categories" ? "OUR COLLECTIONS" : selectedCategory?.name}
          </p>
          <h1 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "bold" }}>
            {view === "categories" ? "Explore Our Categories" : `${selectedCategory?.name} Collection`}
          </h1>
          <div style={{ width: 50, height: 3, backgroundColor: "#C8A33A", borderRadius: 2, marginTop: "12px" }} />
        </div>

        {view === "categories" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => { setSelectedCategory(cat); setView("items"); }}
                style={{ border: "1.5px solid #D7C28A", borderRadius: "12px", backgroundColor: "#FAF6EE", overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}
              >
                <div style={{ height: "160px", background: cat.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>{cat.icon}</div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3 style={{ color: "#2B1A12", fontSize: "0.95rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{cat.name}</h3>
                  <p style={{ color: "#6B5A4B", fontSize: "0.75rem", marginBottom: "16px" }}>{cat.description}</p>
                  <span style={{ border: "1.5px solid #C8A33A", color: "#C8A33A", borderRadius: "999px", padding: "6px 20px", fontSize: "0.82rem", fontWeight: 600, display: "inline-block" }}>Browse</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {view === "items" && selectedCategory && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
            {selectedCategory.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                style={{ border: "1.5px solid #D7C28A", borderRadius: "10px", backgroundColor: "#FAF6EE", overflow: "hidden", cursor: "pointer", width: "100%", padding: 0, textAlign: "left" }}
              >
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

      {selectedItem && (
        <>
          <div onClick={() => setSelectedItem(null)} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(43,26,18,0.88)", zIndex: 100 }} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#FAF6EE", border: "1.5px solid #D7C28A", borderRadius: "14px", overflow: "hidden", zIndex: 101, width: "min(420px, 94vw)", boxShadow: "0 20px 60px rgba(43,26,18,0.6)" }}>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              style={{ position: "absolute", top: "12px", right: "12px", width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(43,26,18,0.75)", color: "#F7F1E4", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}
            >
              <X size={16} />
            </button>

            {selectedItem.image ? (
              <Ring3DViewer image={selectedItem.image} name={selectedItem.name} />
            ) : (
              <div style={{ height: "220px", background: selectedCategory?.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.5rem" }}>
                {selectedCategory?.icon}
              </div>
            )}

            <div style={{ padding: "16px 24px 24px" }}>
              <h3 style={{ color: "#2B1A12", fontSize: "1.15rem", fontWeight: "bold", marginBottom: "4px" }}>{selectedItem.name}</h3>
              <div style={{ width: 40, height: 2, backgroundColor: "#C8A33A", borderRadius: 1, marginBottom: "14px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[{ label: "Karat", value: selectedItem.karat }, { label: "Weight", value: selectedItem.weight }, { label: "Quality", value: "BIS Hallmark" }].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderRadius: "6px", backgroundColor: "#F0E8D4" }}>
                    <span style={{ color: "#6B5A4B", fontSize: "0.875rem", fontWeight: 500 }}>{row.label}</span>
                    <span style={{ color: "#2B1A12", fontSize: "0.875rem", fontWeight: "bold" }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/919840686575" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", marginTop: "16px", backgroundColor: "#25D366", color: "#FFFFFF", borderRadius: "8px", padding: "12px", textAlign: "center", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}