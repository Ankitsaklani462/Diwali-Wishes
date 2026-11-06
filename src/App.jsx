import { Fragment, useRef, useState } from 'react'
import { LANGUAGES, getLang } from './data/languages.js'
import { THEMES } from './themes.js'
import { Fireworks, Floaters, Lanterns, Diya, Rangoli } from './components/Decor.jsx'

const store = {
  get(k) { try { return localStorage.getItem(k) } catch { return null } },
  set(k, v) { try { localStorage.setItem(k, v) } catch { /* ignore */ } },
}

const shuffle = (n) => {
  const a = [...Array(n).keys()]
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function LangPicker({ value, onPick, compact, label }) {
  return (
    <div className={`langs ${compact ? 'compact' : ''}`} role="radiogroup" aria-label={label}>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          role="radio"
          aria-checked={l.code === value}
          className={`chip ${l.code === value ? 'on' : ''}`}
          style={{ fontFamily: l.font }}
          onClick={() => onPick(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const [langCode, setLangCode] = useState(() => {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q && LANGUAGES.some((l) => l.code === q)) return q
    return store.get('dw_lang') || 'hi'
  })
  const [name, setName] = useState(() => store.get('dw_name') || '')
  const [view, setView] = useState('home') // 'home' | 'wish'
  const [themeIdx, setThemeIdx] = useState(0)
  const [wish, setWish] = useState(null) // { idx, n }
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [burst, setBurst] = useState(0)

  // har language ke liye "shuffle bag": 20 ke 20 wish dikhne ke baad hi repeat hoga
  const bag = useRef({})
  const lastShown = useRef({})
  const counter = useRef(0)

  const lang = getLang(langCode)
  const theme = THEMES[themeIdx]
  const cleanName = name.trim()

  const nextMessageIdx = (code, total) => {
    let b = bag.current[code]
    if (!b || b.length === 0) {
      b = shuffle(total)
      const last = lastShown.current[code]
      if (b.length > 1 && b[b.length - 1] === last) {
        ;[b[0], b[b.length - 1]] = [b[b.length - 1], b[0]]
      }
    }
    const idx = b.pop()
    bag.current[code] = b
    lastShown.current[code] = idx
    return idx
  }

  const showWish = (code) => {
    const l = getLang(code)
    counter.current += 1
    setWish({ idx: nextMessageIdx(code, l.messages.length), n: counter.current })
    // pichli theme se alag koi bhi nayi theme
    let t = themeIdx
    while (t === themeIdx) t = Math.floor(Math.random() * THEMES.length)
    setThemeIdx(t)
    setBurst((b) => b + 1)
    setCopied(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!cleanName) {
      setError(lang.ui.err)
      return
    }
    setError('')
    store.set('dw_name', cleanName)
    store.set('dw_lang', langCode)
    setView('wish')
    showWish(langCode)
  }

  const pickLang = (code) => {
    setLangCode(code)
    store.set('dw_lang', code)
    setError('')
    if (view === 'wish') showWish(code)
  }

  // ----- wish text + share -----
  const raw = wish ? lang.messages[wish.idx] : ''
  const plain = raw.replaceAll('{name}', cleanName)
  const pieces = raw.split('{name}')
  const siteUrl = window.location.origin + window.location.pathname
  const shareText = `${plain}\n\n🪔 ${lang.ui.title} 🪔\n${siteUrl}`
  const waHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard blocked */ }
  }

  const vars = {
    '--bg1': theme.bg[0], '--bg2': theme.bg[1], '--bg3': theme.bg[2],
    '--card': theme.card, '--border': theme.border,
    '--text': theme.text, '--muted': theme.muted,
    '--accent': theme.accent, '--accent2': theme.accent2,
    '--btn-text': theme.btnText, '--chip': theme.chip,
  }

  return (
    <div className={`app ${theme.light ? 'light' : ''}`} style={vars}>
      <div className="bg" />
      <div className="stars" />
      <Floaters key={theme.id} icons={theme.floaters} />
      <Fireworks colors={theme.fw} additive={!theme.light} burstKey={burst} />
      <Lanterns />

      {view === 'home' && (
        <section className="card" style={{ fontFamily: lang.font }}>
          <Diya />
          <h1 className="title" style={{ fontFamily: lang.titleFont }}>{lang.ui.title}</h1>
          <p className="sub">{lang.ui.subtitle}</p>

          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="nm">{lang.ui.nameLabel}</label>
            <input
              id="nm"
              value={name}
              maxLength={30}
              autoComplete="given-name"
              placeholder={lang.ui.namePlaceholder}
              onChange={(e) => { setName(e.target.value); setError('') }}
              style={{ fontFamily: lang.font }}
            />
            {error && <div className="err" role="alert">{error}</div>}

            <label>{lang.ui.langLabel}</label>
            <LangPicker value={langCode} onPick={pickLang} label={lang.ui.langLabel} />

            <button type="submit" className="btn cta">{lang.ui.cta}</button>
          </form>
        </section>
      )}

      {view === 'wish' && wish && (
        <section className="card wishcard" style={{ fontFamily: lang.font }}>
          <Rangoli />
          <div className="theme-chip">{theme.emoji} {theme.name}</div>
          <Diya size={88} />
          <h2 className="title" style={{ fontFamily: lang.titleFont }}>{lang.ui.title}</h2>

          <p className="wish" key={wish.n}>
            {pieces.map((p, i) => (
              <Fragment key={i}>
                {p}
                {i < pieces.length - 1 && <span className="nm">{cleanName}</span>}
              </Fragment>
            ))}
          </p>

          <div className="actions">
            <button type="button" className="btn cta" onClick={() => showWish(langCode)}>
              {lang.ui.next}
            </button>
            <div className="row">
              <a className="btn ghost" href={waHref} target="_blank" rel="noopener noreferrer">
                {lang.ui.whatsapp}
              </a>
              <button type="button" className="btn ghost" onClick={copy}>
                {copied ? lang.ui.copied : lang.ui.copy}
              </button>
            </div>
          </div>

          <LangPicker compact value={langCode} onPick={pickLang} label={lang.ui.langLabel} />

          <button type="button" className="link" onClick={() => setView('home')}>
            ← {lang.ui.change}
          </button>
        </section>
      )}

      <footer className="foot">🪔 Happy Diwali 2026 🪔</footer>
    </div>
  )
}
