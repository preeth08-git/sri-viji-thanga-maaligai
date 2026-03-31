import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");
  const [initialMetal, setInitialMetal] = useState(null);

  function navigateTo(pageName, metal) {
    setInitialMetal(metal || null);
    setPage(pageName);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Navbar page={page} setPage={navigateTo} />
      {page === "home" && <Home onNavigate={navigateTo} />}
      {page === "collections" && <Collections initialMetal={initialMetal} />}
      {page === "contact" && <Contact />}
      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
    </div>
  );
}