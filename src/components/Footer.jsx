import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        
        {/* Brand Section */}
        <div className={styles.brand}>
          <span className={styles.brandTop}>Sri Viji</span>
          <span className={styles.brandSub}>Thanga Maaligai</span>
          <p className={styles.tagline}>
            Trusted gold jewellery shop with quality products.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigate</h4>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/collections" className={styles.navLink}>Collections</Link>
          <Link to="/about" className={styles.navLink}>About Us</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </div>

        {/* Contact Info */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Find Us</h4>

          <div className={styles.infoRow}>
            <MapPin size={14} className={styles.icon} />
            <span>
              171/81, Eldams Road, Teynampet, Chennai – 600018
            </span>
          </div>

          <div className={styles.infoRow}>
            <Phone size={14} className={styles.icon} />
            <span>+91 9840686575</span>
          </div>

          <div className={styles.infoRow}>
            <Clock size={14} className={styles.icon} />
            <span>10 AM – 9 PM</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} Sri Viji Thanga Maaligai. All rights reserved.
        </span>
      </div>
    </footer>
  )
}