import { useEffect, useRef, useState } from 'react'
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, shown]
}
export function useCountUp(target, shown, decimals = 0, ms = 1400) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!shown) return
    let raf, t0
    const step = (t) => { t0 ??= t; const p = Math.min((t - t0) / ms, 1); setV(target * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step) }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [shown, target, ms])
  return v.toFixed(decimals)
}
