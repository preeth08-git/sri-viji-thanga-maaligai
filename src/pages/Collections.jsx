import { ArrowLeft, X, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// ─── 3D Viewer ───────────────────────────────────────────────────────────────
function Ring3DViewer({ modelUrl }) {
  const mountRef = useRef(null);
  const ctrlRef = useRef(null);
  const cameraRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const W = mount.clientWidth || 420;
    const H = 320;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0d0700");

    const camera = new THREE.PerspectiveCamera(40, W / H, 0.01, 100);
    camera.position.set(0, 0.5, 4);
    cameraRef.current = camera;

    const keyLight = new THREE.DirectionalLight(0xffd580, 4.0);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);
    scene.add(new THREE.DirectionalLight(0xaaddff, 1.2).position.set(-4, 1, 2) && new THREE.DirectionalLight(0xaaddff, 1.2));
    const fillLight = new THREE.DirectionalLight(0xaaddff, 1.2);
    fillLight.position.set(-4, 1, 2);
    scene.add(fillLight);
    const rimLight = new THREE.DirectionalLight(0xffaa44, 1.8);
    rimLight.position.set(0, -2, -5);
    scene.add(rimLight);
    scene.add(new THREE.AmbientLight(0xfff0cc, 0.4));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = true;
    controls.minDistance = 1.5;
    controls.maxDistance = 10;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    ctrlRef.current = controls;

    let idleTimer = null;
    const stopAutoRotate = () => {
      controls.autoRotate = false;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { controls.autoRotate = true; }, 4000);
    };
    renderer.domElement.addEventListener("pointerdown", stopAutoRotate);
    renderer.domElement.addEventListener("wheel", stopAutoRotate);

    const loader = new GLTFLoader();
    let modelGroup = null;
    loader.load(modelUrl, (gltf) => {
      modelGroup = new THREE.Group();
      const model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const scale = 2.2 / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scale);
      model.position.sub(center.multiplyScalar(scale));
      model.traverse((child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            if (mat.metalness !== undefined) { mat.metalness = Math.max(mat.metalness, 0.85); mat.roughness = Math.min(mat.roughness, 0.25); }
            mat.envMapIntensity = 2.0; mat.needsUpdate = true;
          });
        }
      });
      modelGroup.add(model);
      scene.add(modelGroup);
      setStatus("ready");
    }, (xhr) => { if (xhr.total > 0) setProgress(Math.round((xhr.loaded / xhr.total) * 100)); },
    () => setStatus("error"));

    let animId, t = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.01;
      if (modelGroup) modelGroup.position.y = Math.sin(t * 0.8) * 0.06;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => { const w = mount.clientWidth; renderer.setSize(w, H); camera.aspect = w / H; camera.updateProjectionMatrix(); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(idleTimer);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [modelUrl]);

  const handleReset = useCallback(() => {
    if (cameraRef.current && ctrlRef.current) {
      cameraRef.current.position.set(0, 0.5, 4);
      ctrlRef.current.target.set(0, 0, 0);
      ctrlRef.current.autoRotate = true;
    }
  }, []);

  const handleZoom = useCallback((dir) => {
    if (!cameraRef.current || !ctrlRef.current) return;
    const cam = cameraRef.current;
    const dist = cam.position.distanceTo(ctrlRef.current.target);
    const newDist = Math.max(1.5, Math.min(10, dist + dir * 0.6));
    cam.position.normalize().multiplyScalar(newDist);
  }, []);

  return (
    <div style={{ backgroundColor: "#0d0700", position: "relative" }}>
      <div ref={mountRef} style={{ width: "100%", cursor: "grab", touchAction: "none" }} />
      {status === "loading" && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(13,7,0,0.88)", gap: "12px" }}>
          <div style={{ width: "44px", height: "44px", border: "3px solid #3a2800", borderTop: "3px solid #C8A33A", borderRadius: "50%", animation: "spin 0.9s linear infinite" }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
          <p style={{ color: "#C8A33A", fontSize: "0.78rem" }}>Loading{progress > 0 ? ` ${progress}%` : "..."}</p>
          <div style={{ width: "120px", height: "3px", backgroundColor: "#3a2800", borderRadius: "2px" }}>
            <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#C8A33A", borderRadius: "2px", transition: "width 0.3s" }} />
          </div>
        </div>
      )}
      {status === "error" && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(13,7,0,0.9)", gap: "8px" }}>
          <p style={{ color: "#ff7070", fontSize: "0.85rem" }}>Failed to load model</p>
        </div>
      )}
      {status === "ready" && (
        <>
          <p style={{ position: "absolute", top: "8px", left: "50%", transform: "translateX(-50%)", color: "rgba(215,194,138,0.45)", fontSize: "0.62rem", letterSpacing: "0.06em", whiteSpace: "nowrap", pointerEvents: "none" }}>
            DRAG TO ROTATE · SCROLL TO ZOOM
          </p>
          <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", borderRadius: "999px", padding: "5px 12px", border: "1px solid rgba(200,163,58,0.25)" }}>
            <button type="button" onClick={() => handleZoom(-1)} style={{ background: "none", border: "none", color: "#C8A33A", cursor: "pointer", padding: "2px", display: "flex" }}><ZoomOut size={14} /></button>
            <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(200,163,58,0.3)" }} />
            <button type="button" onClick={handleReset} style={{ background: "none", border: "none", color: "#C8A33A", cursor: "pointer", padding: "2px", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.68rem" }}><RotateCcw size={12} /> Reset</button>
            <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(200,163,58,0.3)" }} />
            <button type="button" onClick={() => handleZoom(1)} style={{ background: "none", border: "none", color: "#C8A33A", cursor: "pointer", padding: "2px", display: "flex" }}><ZoomIn size={14} /></button>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const data = {
  gold: {
    label: "Gold",
    tagline: "22K & 18K BIS Hallmark Gold Jewellery",
    color: "#C8A33A",
    bg: "linear-gradient(135deg, #C8A33A 0%, #7A5010 100%)",
    lightBg: "#FAF6EE",
    categories: [
      {
        name: "Rings", icon: "💍", description: "Engagement, wedding & daily wear rings",
        gradient: "linear-gradient(135deg, #C8A33A 0%, #8B6914 100%)",
        items: [
          { id: 1, name: "Diamond Solitaire Ring", weight: "4.8g", karat: "22K Gold", model: "/rings/ring1.glb", image: "/rings/ring1.png" },
          { id: 2, name: "Emerald Cut Ring", weight: "5.2g", karat: "22K Gold", model: "/rings/ring2.glb", image: "/rings/ring2.png" },
          { id: 3, name: "Twisted Diamond Ring", weight: "6.1g", karat: "22K Gold", model: "/rings/ring3.glb", image: "/rings/ring3.png" },
          { id: 4, name: "Double Heart Ring", weight: "3.9g", karat: "22K Gold", model: "/rings/ring4.glb", image: "/rings/ring4.png" },
        ],
      },
      {
        name: "Chains", icon: "⛓️", description: "Gold chains in various lengths & styles",
        gradient: "linear-gradient(135deg, #D2B04C 0%, #9A7520 100%)",
        items: [
          { id: 1, name: "Box Chain Necklace", weight: "12.5g", karat: "22K Gold", model: null, image: null },
          { id: 2, name: "Rope Chain", weight: "15.8g", karat: "22K Gold", model: null, image: null },
          { id: 3, name: "Flat Curb Chain", weight: "18.2g", karat: "22K Gold", model: null, image: null },
          { id: 4, name: "Singapore Chain", weight: "10.4g", karat: "18K Gold", model: null, image: null },
        ],
      },
      {
        name: "Bangles", icon: "✨", description: "Traditional & modern gold bangle sets",
        gradient: "linear-gradient(135deg, #BF9A30 0%, #7A5C10 100%)",
        items: [
          { id: 1, name: "Plain Gold Bangle", weight: "20.0g", karat: "22K Gold", model: null, image: null },
          { id: 2, name: "Patterned Bangle Set", weight: "45.0g", karat: "22K Gold", model: null, image: null },
          { id: 3, name: "Kada Bangle", weight: "32.5g", karat: "22K Gold", model: null, image: null },
          { id: 4, name: "Twisted Bangle", weight: "22.8g", karat: "18K Gold", model: null, image: null },
        ],
      },
      {
        name: "Necklaces", icon: "📿", description: "Elegant gold necklaces for every occasion",
        gradient: "linear-gradient(135deg, #C8A33A 0%, #6B4F0A 100%)",
        items: [
          { id: 1, name: "Lakshmi Pendant Necklace", weight: "28.5g", karat: "22K Gold", model: null, image: null },
          { id: 2, name: "Traditional Thali Set", weight: "35.0g", karat: "22K Gold", model: null, image: null },
          { id: 3, name: "Kundan Necklace", weight: "42.2g", karat: "22K Gold", model: null, image: null },
          { id: 4, name: "Simple Gold Choker", weight: "18.8g", karat: "18K Gold", model: null, image: null },
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
      {
        name: "Rings", icon: "💍", description: "Sterling silver rings for all occasions",
        gradient: "linear-gradient(135deg, #9EB3C8 0%, #4A6275 100%)",
        items: [
          { id: 1, name: "Silver Toe Ring", weight: "2.1g", karat: "925 Silver", model: null, image: null },
          { id: 2, name: "Oxidised Silver Ring", weight: "3.5g", karat: "925 Silver", model: null, image: null },
          { id: 3, name: "Stone Silver Ring", weight: "4.0g", karat: "925 Silver", model: null, image: null },
          { id: 4, name: "Plain Band Ring", weight: "2.8g", karat: "925 Silver", model: null, image: null },
        ],
      },
      {
        name: "Chains", icon: "⛓️", description: "Silver chains in classic & modern styles",
        gradient: "linear-gradient(135deg, #A8BFD0 0%, #506070 100%)",
        items: [
          { id: 1, name: "Silver Box Chain", weight: "10.5g", karat: "925 Silver", model: null, image: null },
          { id: 2, name: "Rolo Chain", weight: "12.0g", karat: "925 Silver", model: null, image: null },
          { id: 3, name: "Figaro Chain", weight: "14.2g", karat: "925 Silver", model: null, image: null },
          { id: 4, name: "Wheat Chain", weight: "9.8g", karat: "925 Silver", model: null, image: null },
        ],
      },
      {
        name: "Anklets", icon: "🌿", description: "Traditional silver anklets & payal",
        gradient: "linear-gradient(135deg, #B0C8D8 0%, #4A6070 100%)",
        items: [
          { id: 1, name: "Plain Silver Anklet", weight: "15.0g", karat: "925 Silver", model: null, image: null },
          { id: 2, name: "Ghungroo Payal", weight: "22.0g", karat: "925 Silver", model: null, image: null },
          { id: 3, name: "Leaf Design Anklet", weight: "18.5g", karat: "925 Silver", model: null, image: null },
          { id: 4, name: "Oxidised Payal", weight: "20.0g", karat: "925 Silver", model: null, image: null },
        ],
      },
      {
        name: "Earrings", icon: "✦", description: "Silver earrings for daily & festive wear",
        gradient: "linear-gradient(135deg, #9AAFC4 0%, #3D5060 100%)",
        items: [
          { id: 1, name: "Silver Jhumkas", weight: "6.5g", karat: "925 Silver", model: null, image: null },
          { id: 2, name: "Stud Earrings", weight: "2.0g", karat: "925 Silver", model: null, image: null },
          { id: 3, name: "Hoop Earrings", weight: "4.5g", karat: "925 Silver", model: null, image: null },
          { id: 4, name: "Chandbali Earrings", weight: "8.0g", karat: "925 Silver", model: null, image: null },
        ],
      },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Collections() {
  const [view, setView] = useState("metal"); // metal | categories | items
  const [selectedMetal, setSelectedMetal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const metalData = selectedMetal ? data[selectedMetal] : null;
  const accentColor = metalData?.color || "#C8A33A";

  const goBack = () => {
    if (view === "items") { setView("categories"); setSelectedCategory(null); }
    else if (view === "categories") { setView("metal"); setSelectedMetal(null); }
  };

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
            {view === "metal" ? "OUR COLLECTIONS" : view === "categories" ? `${metalData?.label} Collections` : selectedCategory?.name}
          </p>
          <h1 style={{ color: "#2B1A12", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "bold" }}>
            {view === "metal" ? "Choose Your Collection" : view === "categories" ? `${metalData?.label} Jewellery` : `${selectedCategory?.name} — ${metalData?.label}`}
          </h1>
          {view === "metal" && <p style={{ color: "#6B5A4B", fontSize: "0.9rem", marginTop: "8px" }}>Select a metal type to explore our jewellery</p>}
          <div style={{ width: 50, height: 3, backgroundColor: accentColor, borderRadius: 2, marginTop: "12px" }} />
        </div>

        {/* Metal Selection */}
        {view === "metal" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px", maxWidth: "640px", margin: "0 auto" }}>
            {/* Gold Box */}
            <button type="button" onClick={() => { setSelectedMetal("gold"); setView("categories"); }}
              style={{ border: "none", borderRadius: "16px", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", boxShadow: "0 8px 32px rgba(200,163,58,0.25)" }}>
              <div style={{ height: "200px", background: data.gold.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <div style={{ fontSize: "3.5rem" }}></div>
                <span style={{ color: "#fff8e7", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "0.08em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>GOLD</span>
              </div>
              <div style={{ padding: "18px 20px", backgroundColor: "#FDF8EC", borderTop: "2px solid #C8A33A" }}>
                <h3 style={{ color: "#2B1A12", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Gold Jewellery</h3>
                <p style={{ color: "#6B5A4B", fontSize: "0.8rem", marginBottom: "14px" }}>{data.gold.tagline}</p>
                <span style={{ backgroundColor: "#C8A33A", color: "#2B1A12", borderRadius: "999px", padding: "7px 24px", fontSize: "0.84rem", fontWeight: 700, display: "inline-block" }}>Explore Gold →</span>
              </div>
            </button>

            {/* Silver Box */}
            <button type="button" onClick={() => { setSelectedMetal("silver"); setView("categories"); }}
              style={{ border: "none", borderRadius: "16px", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", boxShadow: "0 8px 32px rgba(100,140,170,0.2)" }}>
              <div style={{ height: "200px", background: data.silver.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <div style={{ fontSize: "3.5rem" }}></div>
                <span style={{ color: "#f0f6ff", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "0.08em", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>SILVER</span>
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
            {metalData.categories.map((cat) => (
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
                {item.model && (
                  <div style={{ backgroundColor: accentColor, color: "#2B1A12", textAlign: "center", fontSize: "0.65rem", fontWeight: 700, padding: "3px", letterSpacing: "0.08em" }}>3D VIEW</div>
                )}
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

            {selectedItem.model ? (
              <Ring3DViewer modelUrl={selectedItem.model} />
            ) : selectedItem.image ? (
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