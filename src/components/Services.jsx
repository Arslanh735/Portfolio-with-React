import { services } from '../data/portfolio'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { Icon } from './icons'
export default function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle>What I do</SectionTitle>
      <div className="grid grid-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="card service"><div className="icon-box"><Icon name={s.icon} /></div><h3>{s.title}</h3><p className="muted">{s.text}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
