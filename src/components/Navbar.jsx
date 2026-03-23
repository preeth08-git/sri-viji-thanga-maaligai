import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandTop}>Sri Viji</span>
          <span className={styles.brandBottom}>Thanga Maaligai</span>
        </Link>

        <nav className={styles.nav}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.link} ${pathname === l.to ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.mobileLink} ${pathname === l.to ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
