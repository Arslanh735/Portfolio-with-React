import { nav, socials, profile } from '../data/portfolio'
import { Icon } from './icons'
export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo"><span className="logo-mark">{profile.logo}</span><span>{profile.name}</span></a>
      <nav>{nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
      <div className="socials">{socials.map((s) => <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer"><Icon name={s.icon} size={18} /></a>)}</div>
      <p className="copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
