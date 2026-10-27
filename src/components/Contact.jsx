import { useState } from 'react'
import { contact } from '../data/portfolio'
import Reveal from './Reveal'
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from './icons'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', type: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // Opens the visitor's email app. Swap for Formspree/EmailJS/your own API when ready.
  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(f.type || 'New project')}&body=${encodeURIComponent(body)}`
  }
  const info = [[Mail, 'Email', contact.email], [Phone, 'Phone', contact.phone], [MapPin, 'Location', contact.location], [Clock, 'Availability', contact.availability]]
  return (
    <section id="contact" className="section">
      <Reveal className="glass contact">
        <div className="contact-info">
          <h2>{contact.heading}</h2><p className="muted">{contact.text}</p>
          <ul>{info.map(([I, l, v]) => <li key={l}><I size={18} /><div><small>{l}</small><span>{v}</span></div></li>)}</ul>
        </div>
        <form onSubmit={submit} className="form">
          <input required placeholder="Your name" value={f.name} onChange={set('name')} aria-label="Your name" />
          <input required type="email" placeholder="Your email" value={f.email} onChange={set('email')} aria-label="Your email" />
          <div className="select"><select value={f.type} onChange={set('type')} aria-label="Project type"><option value="">Project type</option>{contact.projectTypes.map((t) => <option key={t}>{t}</option>)}</select><ChevronDown size={16} /></div>
          <textarea required rows="4" placeholder="Tell me about your project" value={f.message} onChange={set('message')} aria-label="Message" />
          <button className="btn btn-primary" type="submit">Send message <Send size={15} /></button>
        </form>
      </Reveal>
    </section>
  )
}
