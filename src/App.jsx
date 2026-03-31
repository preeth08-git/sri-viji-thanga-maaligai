import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");
  const [gender, setGender] = useState(null);

  function navigateTo(pageName) {
    if (pageName === "men") { setGender("men"); setPage("collections"); }
    else if (pageName === "women") { setGender("women"); setPage("collections"); }
    else { setGender(null); setPage(pageName); }
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Navbar page={page} setPage={navigateTo} activePage={page === "collections" && gender ? gender : page} />
      {page === "home" && <Home onNavigate={navigateTo} />}
      {page === "collections" && <Collections initialGender={gender} key={gender} />}
      {page === "contact" && <Contact />}
      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
    </div>
  );
}