import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import styles from './Contact.module.css'

const info = [
  { icon: MapPin, label: 'Address', value: 'Tamil Nadu, India' },
  { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX' },
  { icon: Mail, label: 'Email', value: 'info@srivijithangamaaligai.com' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 10:00 AM – 8:00 PM\nSunday: 11:00 AM – 6:00 PM' },
]

export default function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.heroBar}>
        <span className={styles.eyebrow}>Get in Touch</span>
        <h1 className={styles.heroTitle}>Contact Us</h1>
        <p className={styles.heroSub}>We'd love to help you find the perfect piece</p>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Info */}
          <div className={styles.infoCol}>
            <h2 className={styles.colTitle}>Visit Our Showroom</h2>
            <p className={styles.colDesc}>
              Come in and experience our full collection in person. Our expert jewellers are happy to guide you and help bring your vision to life.
            </p>
            <ul className={styles.infoList}>
              {info.map(item => (
                <li key={item.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}><item.icon size={18} /></div>
                  <div>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className={styles.formCol}>
            <h2 className={styles.colTitle}>Send a Message</h2>
            <form className={styles.form} onSubmit={e => { e.preventDefault(); alert('Thank you! We will get back to you shortly.') }}>
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input className={styles.input} type="text" placeholder="e.g. Priya Sharma" required />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input className={styles.input} type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Email Address</label>
                <input className={styles.input} type="email" placeholder="you@example.com" />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>What are you looking for?</label>
                <select className={styles.input}>
                  <option value="">Select a category</option>
                  <option>Gold Necklaces</option>
                  <option>Bangles & Kadas</option>
                  <option>Earrings</option>
                  <option>Diamond Jewellery</option>
                  <option>Bridal Sets</option>
                  <option>Silver & Antique</option>
                  <option>Custom Order</option>
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} rows={4} placeholder="Tell us more about what you're looking for..." />
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
