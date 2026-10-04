import type { ReactNode } from 'react'
import { Nav } from './components/Nav'
import { Reveal } from './components/Reveal'
import { Topology } from './components/Topology'
import { ArrowIcon, GitHubIcon, LinkedInIcon } from './components/Icons'
import { about, certifications, experience, featured, languages, profile, projects, skills, type Project } from './data'

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section container">
      <Reveal>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
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
      <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
        <GitHubIcon /> GitHub
      </a>
      <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
        <LinkedInIcon /> LinkedIn
      </a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero container">
          <div className="hero-text">
            <p className="status">
              <span className="dot" /> Open to a final-year internship — April 2027, Paris
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="muted hero-tagline">{profile.tagline}</p>
            <pre className="terminal" aria-hidden="true">
              <span className="prompt">$</span> ansible-playbook audit.yml{'\n'}
              <span className="ok">ok</span>=42 changed=0 failed=0 <span className="ok">✓ compliant</span>
            </pre>
            <Links />
          </div>
          <Topology />
        </section>

        <Section id="about" label="01 · About" title="Background">
          <div className="about">
            <Reveal>
              {about.text.map((t) => (
                <p key={t} className="muted">
                  {t}
                </p>
              ))}
              <p className="muted">{about.extra}</p>
            </Reveal>
            <ol className="path">
              {about.path.map((s, i) => (
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

        <Section id="experience" label="02 · Experience" title="Where I’ve worked">
          <ol className="timeline">
            {experience.map((e) => (
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

        <Section id="projects" label="03 · Projects" title="Selected work">
          <Reveal>
            <ProjectCard p={featured} wide />
          </Reveal>
          <div className="grid">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
          <p className="more">
            <a href={profile.github} target="_blank" rel="noreferrer">
              More on GitHub <ArrowIcon />
            </a>
          </p>
        </Section>

        <Section id="skills" label="04 · Skills" title="What I work with">
          <div className="skills">
            {skills.map((s, i) => (
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
                <h3>Certifications <span className="tag">in progress</span></h3>
                <ul className="list">
                  {certifications.map((c) => (
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
                <h3>Languages</h3>
                <ul className="list">
                  {languages.map((l) => (
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

        <Section id="contact" label="05 · Contact" title="Let’s talk">
          <Reveal>
            <p className="muted contact-text">
              Looking for a final-year internship in network automation, DevSecOps or cloud security from April 2027.
              The best way to reach me is LinkedIn.
            </p>
            <Links />
          </Reveal>
        </Section>
      </main>
      <footer className="footer container">
        <span>© 2026 {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}
