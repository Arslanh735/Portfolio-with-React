import { experience } from '../data/portfolio'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={i} delay={i * 100} className="tl-item">
            <span className="dot" />
            <div className="card"><div className="tl-head"><h3>{e.role}</h3><span className="chip">{e.period}</span></div><p className="muted">{e.company}</p><p>{e.text}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
