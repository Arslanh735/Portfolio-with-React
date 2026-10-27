import { profile } from '../data/portfolio'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle>About me</SectionTitle>
      <Reveal className="glass about-card">{profile.about.map((p, i) => <p key={i}>{p}</p>)}</Reveal>
    </section>
  )
}
