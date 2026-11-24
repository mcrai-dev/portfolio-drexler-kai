import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './i18n'

const LANGS = ['fr', 'en']
const LangContext = createContext(null)

function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (LANGS.includes(fromUrl)) return fromUrl
  const saved = window.localStorage.getItem('lang')
  if (LANGS.includes(saved)) return saved
  return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const t = translations[lang]

  const setLang = useCallback((next) => {
    setLangState(next)
    window.localStorage.setItem('lang', next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  const value = useMemo(() => ({ lang, setLang, t, langs: LANGS }), [lang, setLang, t])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
