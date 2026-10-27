import { useEffect, useRef } from 'react'
import { codeSnippets } from '../data/portfolio'

// Subtle canvas animation: code snippets drift upward at low opacity.
export default function CodeBackground() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current, ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, raf, items = []
    const colors = ['168,85,247', '34,211,238', '236,72,153', '148,163,184']
    const make = (initial) => ({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * w, y: initial ? Math.random() * h : h + 30,
      speed: 0.12 + Math.random() * 0.3, size: 11 + Math.random() * 6,
      alpha: 0.07 + Math.random() * 0.13, color: colors[Math.floor(Math.random() * colors.length)],
    })
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const it of items) {
        ctx.font = `${it.size}px "JetBrains Mono", monospace`
        const fade = Math.max(0, Math.min(1, it.y / 120, (h - it.y) / 120 + 0.3))
        ctx.fillStyle = `rgba(${it.color},${it.alpha * fade})`
        ctx.fillText(it.text, it.x, it.y)
      }
    }
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      items = Array.from({ length: Math.round(Math.min(40, Math.max(14, w / 38))) }, () => make(true))
      if (reduce) draw()
    }
    const tick = () => {
      for (let i = 0; i < items.length; i++) { items[i].y -= items[i].speed; if (items[i].y < -30) items[i] = make(false) }
      draw(); raf = requestAnimationFrame(tick)
    }
    resize(); window.addEventListener('resize', resize)
    if (!reduce) tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="code-bg" aria-hidden="true" />
}
