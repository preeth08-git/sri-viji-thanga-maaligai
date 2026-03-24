import { MapPin, Phone, Clock } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2 className="footer-logo">Sri Viji Thanga Maaligai</h2>
          <p>Trusted jewellery shop in Chennai.</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>

          <p><MapPin size={14}/> 171/81, Eldams Road, Teynampet, Chennai</p>
          <p><Phone size={14}/> 9840686575</p>
          <p><Clock size={14}/> 10 AM – 9 PM</p>

          <p style={{marginTop: "10px"}}>
            We are happy to help you choose the right jewellery.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sri Viji Thanga Maaligai
      </div>
    </footer>
  );
}

export default Footer;