import type { ReactNode } from 'react'
import { Nav } from './components/Nav'
import { Reveal } from './components/Reveal'
import { Topology } from './components/Topology'
import { ArrowIcon, GitHubIcon, LinkedInIcon } from './components/Icons'
import { common } from './i18n/common'
import { useI18n } from './i18n/context'
import type { Project, SectionId } from './i18n/types'

function Section({ id, children }: { id: SectionId; children: ReactNode }) {
  const { t } = useI18n()
  return (
    <section id={id} className="section container">
      <Reveal>
        <p className="eyebrow">{t.sections[id].label}</p>
        <h2>{t.sections[id].title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
}

function ProjectCard({ p, wide = false }: { p: Project; wide?: boolean }) {
  return (
    <a className={`card project${wide ? ' project-featured' : ''}`} href={p.repo} target="_blank" rel="noreferrer">
      <div className="project-head">
        <h3>{p.name}</h3>
        <ArrowIcon />
      </div>
      {p.award && <p className="award">🏆 {p.award}</p>}
      <p className="muted">{p.description}</p>
      <Stack items={p.stack} />
    </a>
  )
}

function Links() {
  return (
    <div className="links">
      <a className="btn btn-primary" href={common.github.url} target="_blank" rel="noreferrer">
        <GitHubIcon /> {common.github.label}
      </a>
      <a className="btn" href={common.linkedin.url} target="_blank" rel="noreferrer">
        <LinkedInIcon /> {common.linkedin.label}
      </a>
    </div>
  )
}

export default function App() {
  const { t } = useI18n()
  const term = common.terminal

  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero container">
          <div className="hero-text">
            <p className="status">
              <span className="dot" /> {t.hero.status}
            </p>
            <h1>{common.name}</h1>
            <p className="hero-title">{t.hero.title}</p>
            <p className="muted hero-tagline">{t.hero.tagline}</p>
            <pre className="terminal" aria-hidden="true">
              <span className="prompt">{term.prompt}</span> {term.command}
              {'\n'}
              <span className="ok">{term.ok}</span>
              {term.result} <span className="ok">{term.verdict}</span>
            </pre>
            <Links />
          </div>
          <Topology label={t.a11y.topology} />
        </section>

        <Section id="about">
          <div className="about">
            <Reveal>
              {t.about.text.map((p) => (
                <p key={p} className="muted">
                  {p}
                </p>
              ))}
              <p className="muted">{t.about.extra}</p>
            </Reveal>
            <ol className="path">
              {t.about.path.map((s, i) => (
                <li key={s.school}>
                  <Reveal delay={i * 80}>
                    <span className="mono period">{s.period}</span>
                    <h3>{s.school}</h3>
                    <p className="place">{s.place}</p>
                    <p className="muted">{s.detail}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section id="experience">
          <ol className="timeline">
            {t.experience.map((e) => (
              <li key={e.company}>
                <Reveal>
                  <div className="timeline-head">
                    <div>
                      <h3>{e.role}</h3>
                      <p className="company">
                        {e.company} <span className="place">· {e.place}</span>
                      </p>
                    </div>
                    <span className="mono period">{e.period}</span>
                  </div>
                  <ul className="points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Stack items={e.stack} />
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects">
          <Reveal>
            <ProjectCard p={t.projects.featured} wide />
          </Reveal>
          <div className="grid">
            {t.projects.list.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
          <p className="more">
            <a href={common.github.url} target="_blank" rel="noreferrer">
              {t.projects.more} <ArrowIcon />
            </a>
          </p>
        </Section>

        <Section id="skills">
          <div className="skills">
            {t.skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 60}>
                <div className="card skill">
                  <h3>{s.group}</h3>
                  <Stack items={s.items} />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="duo">
            <Reveal>
              <div className="card">
                <h3>
                  {t.certifications.heading} <span className="tag">{t.certifications.tag}</span>
                </h3>
                <ul className="list">
                  {t.certifications.items.map((c) => (
                    <li key={c.name}>
                      <span>{c.name}</span>
                      <span className="mono muted">{c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card">
                <h3>{t.languages.heading}</h3>
                <ul className="list">
                  {t.languages.items.map((l) => (
                    <li key={l.name}>
                      <span>{l.name}</span>
                      <span className="mono muted">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="contact">
          <Reveal>
            <p className="muted contact-text">{t.contact.text}</p>
            <Links />
          </Reveal>
        </Section>
      </main>
      <footer className="footer container">
        <span>{common.copyright}</span>
        <a href="#top">{t.footer.backToTop}</a>
      </footer>
    </>
  )
}
