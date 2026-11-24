import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLang } from '../LangContext'
import { MetaBar, Photo, SectionTitle } from './ui'

const CATEGORIES = ['wedding', 'portraits', 'silhouette', 'events', 'culture', 'drone']

function Lightbox({ items, index, onChange, onClose }) {
  const { t } = useLang()
  const closeRef = useRef(null)
  const touchX = useRef(null)
  const item = items[index]
  const count = items.length

  const go = useCallback((step) => onChange((index + step + count) % count), [index, count, onChange])

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
      previous?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  useEffect(() => {
    const next = new Image()
    next.src = items[(index + 1) % count].src
  }, [index, items, count])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={t.gallery.categories[item.cat]}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      <div className="lightbox-bar">
        <span>
          {t.gallery.categories[item.cat]} · {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose}>
          {t.gallery.close} ✕
        </button>
      </div>
      <figure className="lightbox-figure" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <img key={item.src} src={item.src} alt={`${t.gallery.alt[item.cat]} ${item.n}`} width={item.w} height={item.h} />
      </figure>
      <button type="button" className="lightbox-nav prev" onClick={() => go(-1)} aria-label={t.gallery.prev}>
        ←
      </button>
      <button type="button" className="lightbox-nav next" onClick={() => go(1)} aria-label={t.gallery.next}>
        →
      </button>
    </div>
  )
}

export default function Gallery({ photos }) {
  const { t } = useLang()
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState(null)

  const items = useMemo(
    () =>
      (cat === 'all' ? CATEGORIES : [cat]).flatMap((c) => photos[c].map((p, i) => ({ ...p, cat: c, n: i + 1 }))),
    [cat, photos],
  )
  const total = CATEGORIES.reduce((n, c) => n + photos[c].length, 0)
  const filters = [['all', t.gallery.all, total], ...CATEGORIES.map((c) => [c, t.gallery.categories[c], photos[c].length])]

  return (
    <section id="work" className="section gallery" aria-labelledby="work-title">
      <MetaBar />
      <div className="gallery-head">
        <p className="intro reveal">{t.gallery.intro}</p>
        <div className="filters" role="group" aria-label={t.gallery.title}>
          {filters.map(([key, label, n]) => (
            <button key={key} type="button" className="chip" aria-pressed={cat === key} onClick={() => setCat(key)}>
              {label} <sup>{n}</sup>
            </button>
          ))}
        </div>
      </div>

      <ul className={`masonry${cat === 'drone' ? ' is-wide' : ''}`}>
        {items.map((p, i) => (
          <li key={p.src} className="tile" style={{ '--d': `${(i % 6) * 40}ms` }}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`${t.gallery.open} : ${t.gallery.alt[p.cat]} ${p.n}`}>
              <Photo photo={p} alt={`${t.gallery.alt[p.cat]} ${p.n}`} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              <span className="tile-cap">
                <span>{t.gallery.categories[p.cat]}</span>
                <span>{String(p.n).padStart(2, '0')}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <SectionTitle id="work-title">
        {cat === 'all' ? t.gallery.title : t.gallery.heading(t.gallery.categories[cat])}
      </SectionTitle>

      {open !== null && <Lightbox items={items} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </section>
  )
}
