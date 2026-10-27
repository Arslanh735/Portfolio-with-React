import { projects } from '../data/portfolio'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { ArrowUpRight } from './icons'
export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle>Featured projects</SectionTitle>
      <div className="grid grid-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <a href={p.link} className="card project" target="_blank" rel="noreferrer">
              <div className="thumb" style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}>{!p.image && <span className="code-ph">{'</>'}</span>}</div>
              <h3>{p.title}</h3>
              <p className="muted">{p.type}</p>
              <div className="card-foot"><span className="chip">{p.tag}</span><span className="arrow"><ArrowUpRight size={15} /></span></div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
