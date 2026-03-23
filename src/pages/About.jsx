import { Heart, Users, Gem } from 'lucide-react'
import shopImage from '../assets/shop.png'
import styles from './About.module.css'

const VALUES = [
  {
    icon: Gem,
    title: 'Quality craftsmanship',
    description: 'Every piece is meticulously crafted by our skilled artisans who have mastered their craft over decades.',
  },
  {
    icon: Heart,
    title: 'Passion for excellence',
    description: 'We pour our heart and soul into every creation, ensuring each piece reflects our commitment to perfection.',
  },
  {
    icon: Users,
    title: 'Customer first',
    description: 'Your satisfaction is our priority. We work closely with each customer to bring their vision to life.',
  },
]

export default function About() {
  return (
    <section aria-labelledby="about-heading" className={styles.page}>
      <div className={styles.heroBar}>
        <span className={styles.eyebrow}>Est. 1985</span>
        <h1 id="about-heading" className={styles.heroTitle}>About Sri Viji<br /><em>Thanga Maaligai</em></h1>
        <p className={styles.heroSub}>Crafting timeless elegance since 1985</p>
      </div>

      <div className={styles.container}>
        {/* Story */}
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <h2 className={styles.sectionTitle}>Our story</h2>
            <div className={styles.prose}>
              <p>Sri Viji Thanga Maaligai was founded with a simple vision: to create exquisite jewellery that captures the beauty of life's most precious moments. For over three decades, we've been committed to this mission, combining traditional craftsmanship with contemporary design.</p>
              <p>Each piece in our collection tells a unique story. From the careful selection of the finest gemstones to the intricate details of our metalwork, every step of our process is guided by our dedication to excellence.</p>
              <p>Our master jewellers bring generations of expertise to their work, ensuring that every ring, necklace, bracelet, and pair of earrings meets our exacting standards. We believe that jewellery is more than adornment — it's a celebration of individuality and a testament to enduring beauty.</p>
            </div>
          </div>
          <div className={styles.shopImgWrap}>
            <img
              src={shopImage}
              alt="Sri Viji Thanga Maaligai shop interior showing jewellery display cases"
              className={styles.shopImg}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>

        <div className={styles.divider} />

        {/* Values */}
        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our values</h2>
          <ul className={styles.valuesGrid}>
            {VALUES.map(v => (
              <li key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon} aria-hidden="true">
                  <v.icon size={22} />
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.divider} />

        {/* Commitment */}
        <div className={styles.commitment}>
          <h2 className={styles.sectionTitle}>Our commitment</h2>
          <div className={styles.prose}>
            <p>We source our materials ethically and sustainably, working only with suppliers who share our values. Every gemstone is conflict-free, and our metals are responsibly sourced. We believe that true luxury should never come at the expense of our planet or its people.</p>
            <p>When you choose Sri Viji Thanga Maaligai, you're not just purchasing jewellery — you're investing in a piece of art that will be treasured for generations to come.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
