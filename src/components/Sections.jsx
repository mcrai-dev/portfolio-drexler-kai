import { useState } from 'react'
import { useLang } from '../LangContext'
import { contact, partners } from '../i18n'
import { Arrow, MetaBar, Photo, SectionTitle, Star, YEAR } from './ui'

export function Hero({ photos }) {
  const { t } = useLang()
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <MetaBar />
      <h1 className="display hero-title" id="hero-title">
        <span className="sr-only">Drexler Kai, {t.role}. </span>
        {t.hero.title}
      </h1>
      <div className="hero-grid">
        <figure className="hero-main">
          <Photo photo={photos.hero[0]} alt={t.hero.alt[0]} sizes="(max-width: 800px) 100vw, 62vw" eager />
        </figure>
        <figure className="hero-side">
          <Photo photo={photos.hero[1]} alt={t.hero.alt[1]} sizes="(max-width: 800px) 50vw, 25vw" eager />
        </figure>
        <a href="#work" className="hero-block">
          <span className="hero-kicker">{t.hero.kicker}</span>
          <span className="hero-block-foot">
            <span>{t.hero.cta}</span>
            <Arrow className="arrow" />
          </span>
        </a>
      </div>
      <div className="hero-foot">
        <p className="lead">{t.hero.lead}</p>
        <div className="ctas">
          <a className="btn btn-primary" href="#work">
            {t.hero.cta}
          </a>
          <a className="btn btn-ghost" href="#contact">
            {t.hero.ctaAlt}
          </a>
        </div>
      </div>
    </section>
  )
}

export function About({ photos }) {
  const { t } = useLang()
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <MetaBar />
      <div className="about-grid">
        <div className="panel reveal">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p className="signature">Drexler Kai</p>
        </div>
        <figure className="about-photo reveal">
          <Photo photo={photos.about[0]} alt={t.about.alt} sizes="(max-width: 900px) 100vw, 60vw" />
        </figure>
      </div>
      <dl className="stats reveal">
        {t.about.stats.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>
      <div className="partners reveal">
        <span className="partners-label">{t.about.partners}</span>
        <ul>
          {partners.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <SectionTitle id="about-title">{t.about.title}</SectionTitle>
    </section>
  )
}

export function Behind({ photos }) {
  const { t } = useLang()
  const [a, b, c, d] = photos.behind
  return (
    <section className="section behind" aria-labelledby="behind-title">
      <div className="behind-grid">
        <figure className="b1 reveal">
          <Photo photo={a} alt={t.behind.alt} sizes="(max-width: 800px) 100vw, 33vw" />
        </figure>
        <figure className="b2 reveal">
          <Photo photo={b} alt={t.behind.alt} sizes="(max-width: 800px) 100vw, 33vw" />
        </figure>
        <figure className="b3 reveal">
          <Photo photo={c} alt={t.behind.alt} sizes="(max-width: 800px) 100vw, 33vw" />
        </figure>
        <figure className="b4 reveal">
          <Photo photo={d} alt={t.behind.alt} sizes="(max-width: 800px) 100vw, 33vw" />
        </figure>
        <div className="panel b5 reveal">
          <p>{t.behind.text}</p>
        </div>
      </div>
      <SectionTitle id="behind-title">{t.behind.title}</SectionTitle>
    </section>
  )
}

export function Vision({ photos }) {
  const { t } = useLang()
  return (
    <section className="section vision" aria-labelledby="vision-title">
      <MetaBar />
      <div className="vision-grid">
        <figure className="reveal">
          <Photo photo={photos.vision[0]} alt={t.vision.alt} sizes="(max-width: 900px) 100vw, 55vw" />
        </figure>
        <div className="panel reveal">
          <p>{t.vision.p1}</p>
          <p>{t.vision.p2}</p>
          <ul className="values">
            {t.vision.values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
      <SectionTitle id="vision-title">{t.vision.title}</SectionTitle>
    </section>
  )
}

export function Services() {
  const { t } = useLang()
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <MetaBar />
      <p className="intro reveal">{t.services.intro}</p>
      <ol className="service-list">
        {t.services.items.map((s, i) => (
          <li key={s.title} className="service reveal">
            <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
      <SectionTitle id="services-title">{t.services.title}</SectionTitle>
    </section>
  )
}

export function Process() {
  const { t } = useLang()
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <MetaBar />
      <ol className="steps">
        {t.process.steps.map((s, i) => (
          <li key={s.title} className="panel step reveal">
            <h3>
              {String(i + 1).padStart(2, '0')}. {s.title}
            </h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
      <SectionTitle id="process-title">{t.process.title}</SectionTitle>
    </section>
  )
}

export function Journey({ photos }) {
  const { t } = useLang()
  return (
    <section className="section journey" id="journey" aria-labelledby="journey-title">
      <MetaBar />
      <div className="journey-grid">
        <ol className="timeline">
          {t.journey.items.map((item) => (
            <li key={item.role} className="reveal">
              <span className="period">{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="org">{item.org}</p>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <aside className="journey-side reveal">
          <figure>
            <Photo photo={photos.profile[0]} alt={t.journey.profileAlt} sizes="(max-width: 900px) 100vw, 30vw" />
          </figure>
          <h3>{t.journey.tools}</h3>
          <ul className="tags">
            {t.journey.toolList.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h3>{t.journey.languages}</h3>
          <ul className="plain">
            {t.journey.languageList.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </aside>
      </div>
      <SectionTitle id="journey-title">{t.journey.title}</SectionTitle>
    </section>
  )
}

export function Contact({ photos }) {
  const { t } = useLang()
  const f = t.contact.form
  const [form, setForm] = useState({ name: '', email: '', type: '', date: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = [
      `${f.name}: ${form.name}`,
      `${f.email}: ${form.email}`,
      `${f.type}: ${form.type}`,
      `${f.date}: ${form.date}`,
      '',
      form.message,
    ].join('\n')
    const subject = `${f.subject}${form.type ? ` : ${form.type}` : ''}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <MetaBar />
      <div className="contact-grid">
        <div className="contact-info">
          <div className="panel reveal">
            <p>{t.contact.text}</p>
            <Star className="star" />
          </div>
          <ul className="contact-links reveal">
            <li>
              <span>{t.contact.email}</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span>{t.contact.phone}</span>
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </li>
            <li>
              <span>{t.contact.whatsapp}</span>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>
        <figure className="contact-photo reveal">
          <Photo photo={photos.contact[0]} alt={t.contact.alt} sizes="(max-width: 900px) 100vw, 55vw" />
        </figure>
      </div>

      <form className="contact-form reveal" onSubmit={submit}>
        <label>
          <span>{f.name}</span>
          <input name="name" value={form.name} onChange={update} required autoComplete="name" />
        </label>
        <label>
          <span>{f.email}</span>
          <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
        </label>
        <label>
          <span>{f.type}</span>
          <select name="type" value={form.type} onChange={update}>
            <option value="">—</option>
            {t.services.items.map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{f.date}</span>
          <input name="date" type="date" value={form.date} onChange={update} />
        </label>
        <label className="full">
          <span>{f.message}</span>
          <textarea name="message" rows="5" value={form.message} onChange={update} required />
        </label>
        <button type="submit" className="btn btn-primary">
          {f.submit} <Arrow className="arrow-sm" />
        </button>
      </form>

      <SectionTitle id="contact-title">{t.contact.title}</SectionTitle>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <span>
        © {YEAR} Drexler Kai · {t.hero.location}
      </span>
      <span>{t.footer.rights}</span>
      <a href="#top">{t.footer.top} ↑</a>
    </footer>
  )
}
