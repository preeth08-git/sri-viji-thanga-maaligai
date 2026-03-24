import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <a
        href="https://wa.me/919840686575"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        WhatsApp
      </a>
    </BrowserRouter>
  );
}

export default App;