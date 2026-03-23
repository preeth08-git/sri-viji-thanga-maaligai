import styles from './Collections.module.css'

const categories = [
  {
    name: 'Gold Necklaces',
    desc: 'From delicate chains to statement temple pieces — crafted in 18K and 22K gold.',
    tag: '22K & 18K Gold',
  },
  {
    name: 'Bangles & Kadas',
    desc: 'Plain, studded, and antique designs for every occasion from daily wear to bridal.',
    tag: 'Traditional & Modern',
  },
  {
    name: 'Earrings',
    desc: 'Jhumkas, studs, drops, and chandbalis in gold and diamond.',
    tag: 'Gold & Diamond',
  },
  {
    name: 'Diamond Jewellery',
    desc: 'Certified solitaires and diamond sets — elegant, timeless, and brilliant.',
    tag: 'Certified Diamonds',
  },
  {
    name: 'Bridal Sets',
    desc: 'Complete bridal collections to make your special day unforgettable.',
    tag: 'Bridal',
  },
  {
    name: 'Silver & Antique',
    desc: 'Temple jewellery, oxidised silver, and traditional antique gold pieces.',
    tag: 'Heritage',
  },
]

export default function Collections() {
  return (
    <section className={styles.page}>
      <div className={styles.heroBar}>
        <span className={styles.eyebrow}>Explore</span>
        <h1 className={styles.heroTitle}>Our Collections</h1>
        <p className={styles.heroSub}>Handcrafted pieces for every milestone</p>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((c, i) => (
            <div key={c.name} className={styles.card} style={{ animationDelay: `${i * 60}ms` }}>
              <div className={styles.cardTop}>
                <span className={styles.tag}>{c.tag}</span>
              </div>
              <h2 className={styles.cardTitle}>{c.name}</h2>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <p>Visit our showroom to browse the full collection. New pieces arrive weekly.</p>
        </div>
      </div>
    </section>
  )
}
