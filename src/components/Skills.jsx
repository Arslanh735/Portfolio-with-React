import { skillBars, toolBadges, results } from '../data/portfolio'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import Counter from './Counter'
import { useReveal } from '../hooks/useReveal'
function Bar({ name, level }) {
  const [ref, shown] = useReveal()
  return (
    <div ref={ref} className="bar"><div className="bar-head"><span>{name}</span><span>{level}%</span></div>
      <div className="track"><i style={{ width: shown ? `${level}%` : 0 }} /></div></div>
  )
}
export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle>Tools &amp; skills</SectionTitle>
      <div className="skills-wrap">
        <Reveal>
          <div className="badges">{toolBadges.map((b) => <span key={b} className="badge">{b}</span>)}</div>
          <div className="bars">{skillBars.map((s) => <Bar key={s.name} {...s} />)}</div>
        </Reveal>
        <Reveal delay={120} className="glass results">
          <h3>Client results</h3>
          <div className="results-grid">
            {results.map((r) => <div key={r.label}><strong><Counter value={r.value} suffix={r.suffix} decimals={r.decimals || 0} /></strong><span>{r.label}</span></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
