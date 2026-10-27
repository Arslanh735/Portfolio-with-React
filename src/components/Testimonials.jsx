import { useEffect, useState } from 'react'
import { testimonials } from '../data/portfolio'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000); return () => clearInterval(t) }, [])
  return (
    <section id="testimonials" className="section">
      <SectionTitle>Clients love working with me</SectionTitle>
      <div className="grid grid-3">
        {testimonials.map((t, n) => (
          <Reveal key={n} delay={n * 90} className={`t-wrap ${n === i ? 'active' : ''}`}>
            <figure className="card testimonial">
              <div className="avatar">{t.avatar ? <img src={t.avatar} alt={t.name} /> : t.name[0]}</div>
              <blockquote>{t.text}</blockquote>
              <figcaption><strong>{t.name}</strong><span className="muted">{t.role}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <div className="dots">{testimonials.map((_, n) => <button key={n} className={n === i ? 'on' : ''} onClick={() => setI(n)} aria-label={`Show testimonial ${n + 1}`} />)}</div>
    </section>
  )
}
