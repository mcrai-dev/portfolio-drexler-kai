import { useLang } from '../LangContext'

const SMALL = 900
export const YEAR = new Date().getFullYear()

export function Photo({ photo, alt, sizes = '100vw', eager = false, className = '' }) {
  const ratio = Math.min(1, SMALL / Math.max(photo.w, photo.h))
  const smallW = Math.round(photo.w * ratio)
  return (
    <img
      className={className}
      src={photo.thumb}
      srcSet={`${photo.thumb} ${smallW}w, ${photo.src} ${photo.w}w`}
      sizes={sizes}
      width={photo.w}
      height={photo.h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
    />
  )
}

export function MetaBar() {
  const { t } = useLang()
  return (
    <div className="metabar" aria-hidden="true">
      <span>Drexler Kai</span>
      <span>{YEAR}</span>
      <span>{t.role}</span>
    </div>
  )
}

export function SectionTitle({ children, as: Tag = 'h2', id }) {
  return (
    <Tag className="display section-title reveal" id={id}>
      {children}
    </Tag>
  )
}

export function Arrow({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 14 L50 50 M50 18 V50 H18" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="square" />
    </svg>
  )
}

export function Star({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 0 C54 34 66 46 100 50 C66 54 54 66 50 100 C46 66 34 54 0 50 C34 46 46 34 50 0 Z" fill="currentColor" />
    </svg>
  )
}
