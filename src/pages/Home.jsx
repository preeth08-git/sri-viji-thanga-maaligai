import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award } from 'lucide-react'
import styles from './Home.module.css'

const features = [
  { icon: Star, title: 'Since 1985', desc: 'Over 35 years of trusted craftsmanship' },
  { icon: Shield, title: 'Certified Gold', desc: 'BIS hallmarked, conflict-free gemstones' },
  { icon: Award, title: 'Master Artisans', desc: 'Handcrafted by generational experts' },
]

const highlights = [
  { label: 'Gold Jewellery', desc: 'Necklaces, bangles, chains & more', bg: '#2C1A0E' },
  { label: 'Diamond Sets', desc: 'Bridal & everyday diamond collections', bg: '#1A1009' },
  { label: 'Silver & Antique', desc: 'Temple jewellery & traditional pieces', bg: '#3A2510' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Est. 1985 · Tamil Nadu</p>
          <h1 className={styles.heroTitle}>
            Timeless Gold,<br />
            <em>Crafted with Soul</em>
          </h1>
          <p className={styles.heroSub}>
            Exquisite jewellery that honours tradition and celebrates every precious moment.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/collections" className={styles.ctaPrimary}>
              View Collections <ArrowRight size={16} />
            </Link>
            <Link to="/about" className={styles.ctaSecondary}>Our Story</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>scroll</div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        {features.map(f => (
          <div key={f.title} className={styles.featureItem}>
            <div className={styles.featureIcon}><f.icon size={20} /></div>
            <div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Collections Highlights */}
      <section className={styles.collectionsSection}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Our Collections</span>
          <h2 className={styles.sectionTitle}>Find Your Perfect Piece</h2>
        </div>
        <div className={styles.collectionsGrid}>
          {highlights.map(h => (
            <Link to="/collections" key={h.label} className={styles.collCard} style={{ background: h.bg }}>
              <div className={styles.collCardInner}>
                <h3 className={styles.collCardTitle}>{h.label}</h3>
                <p className={styles.collCardDesc}>{h.desc}</p>
                <span className={styles.collCardCta}>Explore <ArrowRight size={13} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <h2 className={styles.ctaBandTitle}>Visit Our Showroom</h2>
          <p className={styles.ctaBandSub}>Experience the beauty of our collections in person. Our experts are here to guide you.</p>
          <Link to="/contact" className={styles.ctaPrimary}>
            Get Directions <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
