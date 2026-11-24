import { useEffect } from 'react'
import { LangProvider, useLang } from './LangContext'
import photos from './data/photos'
import Header from './components/Header'
import Gallery from './components/Gallery'
import { About, Behind, Contact, Footer, Hero, Journey, Process, Services, Vision } from './components/Sections'

function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}

function Page() {
  const { lang } = useLang()
  useReveal(lang)
  return (
    <>
      <a className="skip" href="#main">
        {lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}
      </a>
      <Header />
      <main id="main">
        <Hero photos={photos} />
        <About photos={photos} />
        <Gallery photos={photos} />
        <Behind photos={photos} />
        <Vision photos={photos} />
        <Services />
        <Process />
        <Journey photos={photos} />
        <Contact photos={photos} />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  )
}
