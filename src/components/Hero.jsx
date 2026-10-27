import { profile } from '../data/portfolio'
import { ArrowRight, Download } from './icons'
import Counter from './Counter'
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="eyebrow rise" style={{ '--d': '0ms' }}>{profile.eyebrow}</p>
        <h1>
          {profile.headline.map((line, i) => (
            <span key={i} className={`rise ${i === 1 ? 'grad' : ''}`} style={{ '--d': `${120 + i * 120}ms` }}>{line}</span>
          ))}
        </h1>
        <p className="lead rise" style={{ '--d': '520ms' }}>{profile.tagline}</p>
        <div className="hero-cta rise" style={{ '--d': '640ms' }}>
          <a href="#projects" className="btn btn-primary">View my work <ArrowRight size={16} /></a>
          <a href={profile.resumeUrl} className="btn btn-ghost" download>Download resume <Download size={15} /></a>
        </div>
      </div>
      <div className="hero-visual rise" style={{ '--d': '300ms' }}>
        <div className="orb" /><div className="ring ring-a" /><div className="ring ring-b" />
        {profile.image ? <img src={profile.image} alt={profile.name} className="portrait" /> : <div className="portrait placeholder">{profile.logo}</div>}
        <div className="glass stats">
          {profile.stats.map((s) => <div key={s.label}><strong><Counter value={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></div>)}
        </div>
        <div className="glass terminal" aria-hidden="true">
          <i /><i /><i />
          <p><b>$</b> npm run build</p>
          <p className="ok">✓ built in 1.2s</p>
        </div>
      </div>
    </section>
  )
}
