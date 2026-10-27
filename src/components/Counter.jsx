import { useReveal, useCountUp } from '../hooks/useReveal'
export default function Counter({ value, suffix = '', decimals = 0 }) {
  const [ref, shown] = useReveal()
  const v = useCountUp(value, shown, decimals)
  return <span ref={ref}>{v}<small>{suffix}</small></span>
}
