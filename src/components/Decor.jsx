import { useEffect, useMemo, useRef } from 'react'

/* ---------- Aatishbazi (fireworks) canvas ---------- */
export function Fireworks({ colors, additive, burstKey }) {
  const ref = useRef(null)
  const colorsRef = useRef(colors)
  const addRef = useRef(additive)
  const api = useRef({ burst: () => {} })
  colorsRef.current = colors
  addRef.current = additive

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, parts = [], raf = 0, nextAuto = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const burst = (x, y) => {
      const cols = colorsRef.current
      const base = cols[Math.floor(Math.random() * cols.length)]
      const n = 44
      for (let i = 0; i < n; i++) {
        const a = (Math.PI * 2 * i) / n + Math.random() * 0.2
        const s = 1.4 + Math.random() * 3.2
        parts.push({
          x, y,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          life: 1,
          decay: 0.008 + Math.random() * 0.012,
          size: 1.4 + Math.random() * 1.6,
          color: Math.random() < 0.7 ? base : cols[Math.floor(Math.random() * cols.length)],
        })
      }
    }
    api.current.burst = burst

    const tick = (t) => {
      ctx.clearRect(0, 0, w, h)
      if (!reduce && t > nextAuto) {
        burst(w * (0.08 + Math.random() * 0.84), h * (0.08 + Math.random() * 0.42))
        nextAuto = t + 1100 + Math.random() * 1500
      }
      ctx.globalCompositeOperation = addRef.current ? 'lighter' : 'source-over'
      parts = parts.filter((p) => p.life > 0)
      for (const p of parts) {
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.985
        p.vy = p.vy * 0.985 + 0.035
        p.life -= p.decay
        ctx.globalAlpha = Math.max(p.life, 0)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }

    // screen par kahin bhi tap karo to patakha phootega
    const onTap = (e) => burst(e.clientX, e.clientY)

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointerdown', onTap)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointerdown', onTap)
    }
  }, [])

  // har naye wish par 3 patakhe ek saath
  useEffect(() => {
    if (!burstKey) return
    const ids = [0, 180, 360].map((d) =>
      setTimeout(() => {
        api.current.burst(
          window.innerWidth * (0.15 + Math.random() * 0.7),
          window.innerHeight * (0.12 + Math.random() * 0.35)
        )
      }, d)
    )
    return () => ids.forEach(clearTimeout)
  }, [burstKey])

  return <canvas ref={ref} className="fireworks" aria-hidden="true" />
}

/* ---------- Upar uthte diye / phool ---------- */
export function Floaters({ icons }) {
  const items = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        icon: icons[i % icons.length],
        left: Math.random() * 100,
        size: 16 + Math.random() * 22,
        dur: 9 + Math.random() * 10,
        delay: -Math.random() * 16,
        drift: (Math.random() * 2 - 1) * 60,
      })),
    [icons]
  )
  return (
    <div className="floaters" aria-hidden="true">
      {items.map((it, i) => (
        <span
          key={i}
          style={{
            left: it.left + '%',
            fontSize: it.size,
            animationDuration: it.dur + 's',
            animationDelay: it.delay + 's',
            '--drift': it.drift + 'px',
          }}
        >
          {it.icon}
        </span>
      ))}
    </div>
  )
}

/* ---------- Jhoolti hui kandeel ---------- */
export function Lanterns() {
  return (
    <div className="lanterns" aria-hidden="true">
      {[7, 27, 50, 73, 93].map((left, i) => (
        <div
          key={i}
          className="lantern"
          style={{ left: left + '%', animationDelay: -i * 0.8 + 's', '--len': 34 + (i % 2) * 30 + 'px' }}
        >
          <i />
          <span>🏮</span>
        </div>
      ))}
    </div>
  )
}

/* ---------- Diya (animated flame) ---------- */
export function Diya({ size = 104 }) {
  return (
    <svg className="diya" width={size} height={size * 0.8} viewBox="0 0 120 96" aria-hidden="true">
      <defs>
        <radialGradient id="dg-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffb703" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dg-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="60%" stopColor="#ffc44d" />
          <stop offset="100%" stopColor="#fff6c2" />
        </linearGradient>
        <linearGradient id="dg-bowl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent2)" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="38" r="38" fill="url(#dg-glow)" className="diya-glow" />
      <path className="flame" d="M60 12 C75 30 77 44 60 56 C43 44 45 30 60 12Z" fill="url(#dg-flame)" />
      <path className="flame inner" d="M60 30 C66 38 67 45 60 52 C53 45 54 38 60 30Z" fill="#fffbe0" opacity="0.9" />
      <path d="M8 54 Q60 114 112 54 Q60 66 8 54Z" fill="url(#dg-bowl)" />
      <path d="M8 54 Q60 66 112 54 Q60 44 8 54Z" fill="rgba(0,0,0,0.25)" />
      <path d="M30 70 Q60 92 90 70" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/* ---------- Ghoomti hui rangoli ---------- */
export function Rangoli() {
  const angles = Array.from({ length: 12 }, (_, i) => i * 30)
  return (
    <svg className="rangoli" viewBox="-150 -150 300 300" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        {angles.map((a) => (
          <ellipse key={a} cx="0" cy="-80" rx="22" ry="52" transform={`rotate(${a})`} />
        ))}
        {angles.map((a) => (
          <circle key={'d' + a} cx="0" cy="-138" r="5" transform={`rotate(${a + 15})`} fill="currentColor" />
        ))}
        <circle r="30" />
        <circle r="140" strokeDasharray="2 6" />
      </g>
    </svg>
  )
}
