  import { useState } from "react";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import WhatsAppButton from "./components/WhatsAppButton";
  import Home from "./pages/Home";
  import Collections from "./pages/Collections";
  import Contact from "./pages/Contact";

  export default function App() {
    const [page, setPage] = useState("home");

    function renderPage() {
      if (page === "collections") return <Collections />;
      if (page === "contact") return <Contact />;
      return <Home setPage={setPage} />;
    }

    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar page={page} setPage={setPage} />
        <main style={{ flex: 1 }}>{renderPage()}</main>
        <Footer setPage={setPage} />
        <WhatsAppButton />
      </div>
    );
  }