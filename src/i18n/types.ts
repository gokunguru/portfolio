export type Lang = 'en' | 'fr'

export type SectionId = 'about' | 'experience' | 'projects' | 'skills' | 'contact'

export type Project = {
  name: string
  repo: string
  description: string
  stack: string[]
  award?: string
}

export type Content = {
  meta: { title: string; description: string }
  a11y: { backToTop: string; toggleMenu: string; switchLang: string; topology: string }
  nav: Record<SectionId, string>
  sections: Record<SectionId, { label: string; title: string }>
  hero: { status: string; title: string; tagline: string }
  about: {
    text: string[]
    extra: string
    path: { period: string; school: string; place: string; detail: string }[]
  }
  experience: { role: string; company: string; place: string; period: string; points: string[]; stack: string[] }[]
  projects: { featured: Project; list: Project[]; more: string }
  skills: { group: string; items: string[] }[]
  certifications: { heading: string; tag: string; items: { name: string; issuer: string }[] }
  languages: { heading: string; items: { name: string; level: string }[] }
  contact: { text: string }
  footer: { backToTop: string }
}
