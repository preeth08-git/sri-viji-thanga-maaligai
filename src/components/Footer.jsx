import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#2B1A12", color: "#F7F1E4" }} className="pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <span style={{ color: "#C8A33A", fontSize: "1.5rem", fontWeight: "bold", display: "block" }}>SRI VIJI</span>
            <span style={{ color: "#D7C28A", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>Thanga Maaligai</span>
            <p style={{ color: "#A08060", lineHeight: 1.7, fontSize: "0.875rem", marginTop: "8px" }}>
              Trusted gold jewellers since 1985. Quality you can rely on, prices that are fair.
            </p>
          </div>

          <div>
            <h3 style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "16px" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[{ to: "/", label: "Home" }, { to: "/collections", label: "Collections" }, { to: "/contact", label: "Contact Us" }].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} style={{ color: "#D7C28A", fontSize: "0.875rem", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: "#C8A33A", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "16px" }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} style={{ color: "#C8A33A", marginTop: 3, flexShrink: 0 }} />
                <span style={{ color: "#A08060", fontSize: "0.875rem" }}>12, Gandhi Road, Kumbakonam, Tamil Nadu – 612001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} style={{ color: "#C8A33A", flexShrink: 0 }} />
                <a href="tel:+919876543210" style={{ color: "#D7C28A", fontSize: "0.875rem", textDecoration: "none" }}>+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} style={{ color: "#C8A33A", marginTop: 3, flexShrink: 0 }} />
                <span style={{ color: "#A08060", fontSize: "0.875rem" }}>Mon–Sat: 9:30 AM – 8:00 PM<br />Sunday: 10:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ borderTop: "1px solid #3A241A" }}>
          <p style={{ color: "#6B5A4B", fontSize: "0.75rem" }}>© {year} Sri Viji Thanga Maaligai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}