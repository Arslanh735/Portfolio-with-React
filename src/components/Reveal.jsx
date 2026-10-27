import { useReveal } from '../hooks/useReveal'
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, shown] = useReveal()
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}
