import { process } from '../data/portfolio'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { Icon } from './icons'
export default function Process() {
  return (
    <section id="process" className="section">
      <SectionTitle>My process</SectionTitle>
      <div className="process glass">
        {process.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="step">
            <div className="hex"><Icon name={p.icon} /></div><h4>{p.title}</h4><p className="muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
