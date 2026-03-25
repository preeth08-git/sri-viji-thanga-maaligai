import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "collections") return <Collections />;
    if (page === "contact") return <Contact />;
    return <Home navigate={setPage} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} navigate={setPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={setPage} />
      <WhatsAppButton />
    </div>
  );
}