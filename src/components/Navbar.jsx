import { useEffect, useState } from "react";
import { nav, profile } from "../data/portfolio";
import { Menu, X, ArrowUpRight } from "./icons";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = nav[0].href;
      for (const n of nav) {
        const el = document.querySelector(n.href);
        if (el && el.getBoundingClientRect().top < 140) cur = n.href;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="logo">
        <span className="logo-mark">{profile.logo}</span>
        <span>{profile.name}</span>
      </a>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className={active === n.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="btn btn-ghost nav-cta">
        Let's work together <ArrowUpRight size={14} />
      </a>
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
