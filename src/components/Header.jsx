import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'

const LINKS = ['about', 'work', 'services', 'process', 'journey', 'contact']

export function LangSwitch() {
  const { lang, setLang, langs } = useLang()
  return (
    <div className="lang" role="group" aria-label="Langue / Language">
      {langs.map((l) => (
        <button key={l} type="button" lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>
        Drexler Kai
      </a>
      <nav id="site-nav" className="nav" aria-label="Navigation">
        <ul>
          {LINKS.map((k, i) => (
            <li key={k}>
              <a href={`#${k}`} onClick={() => setOpen(false)}>
                <span className="nav-num">0{i + 1}</span>
                {t.nav[k]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-actions">
        <LangSwitch />
        <a href="#contact" className="btn btn-primary btn-sm header-cta">
          {t.nav.book}
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </div>
    </header>
  )
}
