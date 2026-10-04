import { automationSkills, bouyguesStack, cloudSkills, networkSkills, repos } from './common'
import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Kamil Mandi · Network & Security Automation',
    description:
      'Kamil Mandi — Network & Security Automation · DevSecOps · Cloud. Engineering student at ESIEA and MSc Cybersecurity Management & Consulting (ESIEA × SKEMA).',
  },
  a11y: {
    backToTop: 'Back to top',
    toggleMenu: 'Toggle menu',
    switchLang: 'Language',
    topology: 'Network topology illustration',
  },
  nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
  sections: {
    about: { label: '01 · About', title: 'Background' },
    experience: { label: '02 · Experience', title: 'Where I’ve worked' },
    projects: { label: '03 · Projects', title: 'Selected work' },
    skills: { label: '04 · Skills', title: 'What I work with' },
    contact: { label: '05 · Contact', title: 'Let’s talk' },
  },
  hero: {
    status: 'Open to a final-year internship — April 2027, Paris',
    title: 'Network & Security Automation · DevSecOps · Cloud',
    tagline:
      'I automate networks and secure infrastructure — turning device configs, Linux hosts and cloud environments into code that can be audited, tested and validated in CI.',
  },
  about: {
    text: [
      'Final-year engineering student at ESIEA (Software Engineering), currently completing an MSc in Cybersecurity Management & Consulting through a double degree with SKEMA Business School.',
      'My work sits where networking, automation and security meet: multi-vendor network automation with Ansible and Python, infrastructure as code, and security controls built into the delivery pipeline.',
    ],
    extra: 'Founding member of the ESIEA Finance Club, for which I built the website.',
    path: [
      {
        period: '2022 – 2027',
        school: 'ESIEA',
        place: 'Paris, France',
        detail: 'Engineering degree in Computer Science — Software Engineering',
      },
      {
        period: 'Feb – Jun 2025',
        school: 'Queensland University of Technology',
        place: 'Brisbane, Australia',
        detail: 'Exchange semester — Computer Systems and Security, Web Computing, Web Development with Databases',
      },
      {
        period: '2026 – 2027',
        school: 'ESIEA × SKEMA Business School',
        place: 'Paris, France',
        detail: 'MSc Cybersecurity Management & Consulting — technical security, governance, risk & compliance, management',
      },
    ],
  },
  experience: [
    {
      role: 'Network Automation Engineer (Intern)',
      company: 'Bouygues Telecom Business',
      place: 'Paris, France',
      period: 'Apr 2026 – Aug 2026',
      points: [
        'Built Ansible and Python automation for enterprise WAN networks in multi-vendor environments (Cisco, Huawei, Ekinops).',
        'Industrialized high-volume compliance audits across multi-site networks (QoS, ACL, VLAN, DHCP) and automated deployments.',
      ],
      stack: bouyguesStack,
    },
    {
      role: 'Systems & Network Engineering Assistant (Intern)',
      company: 'ICMT France',
      place: 'Cergy, France',
      period: 'Jul 2022 – Aug 2022',
      points: [
        'Deployed and configured virtual machines and network settings.',
        'Hardened workstations, managed backups and supported users.',
        'Contributed to the resolution of technical incidents.',
      ],
      stack: ['Virtualization', 'Networking', 'Windows', 'Backup'],
    },
  ],
  projects: {
    featured: {
      ...repos.ordocare,
      award: 'Technical Award ESIEA 2026',
      description:
        'Mobile app that digitizes medical prescriptions: OCR extraction, multilingual translation, medication reminders and history. React Native front end, Django REST API with JWT, and a FastAPI machine-learning service running TrOCR and NLLB-200, all containerized.',
    },
    list: [
      {
        ...repos.compliance,
        description:
          'Audits Cisco IOS configurations against YAML-defined security rules and builds a consolidated HTML compliance report. Runs fully offline, so the whole audit is tested in CI.',
      },
      {
        ...repos.zeroTrust,
        description:
          'Zero Trust AWS foundation in Terraform: segmented VPC, least-privilege security groups, ALB with WAF, VPC endpoints, KMS-encrypted logs, CloudTrail, GuardDuty and Security Hub, plus a threat model.',
      },
      {
        ...repos.hardening,
        description:
          'Audits a vulnerable Linux host, hardens it (SSH, UFW, Fail2ban, auditd), re-scans it with Lynis and publishes a before/after HTML report from a CI pipeline.',
      },
      {
        ...repos.sre,
        description:
          'Provisions EC2 instances with Terraform, then configures an Nginx load balancer, a Flask API and Prometheus, Alertmanager and Grafana monitoring with Ansible. Load-tested with Locust.',
      },
      {
        ...repos.observability,
        description:
          'Bootstraps a Raspberry Pi, installs Docker and deploys a Prometheus, Node Exporter and Grafana monitoring stack with Ansible.',
      },
    ],
    more: 'More on GitHub',
  },
  skills: [
    { group: 'Network', items: networkSkills },
    { group: 'Automation & IaC', items: automationSkills },
    {
      group: 'Security',
      items: ['Zero Trust', 'Linux hardening', 'Lynis', 'Fail2ban / auditd', 'tfsec', 'Checkov', 'gitleaks', 'Threat modeling', 'GRC'],
    },
    { group: 'Cloud & Ops', items: cloudSkills },
  ],
  certifications: {
    heading: 'Certifications',
    tag: 'in progress',
    items: [
      { name: 'Cisco CCNA', issuer: 'Cisco' },
      { name: 'Cybersecurity Analyst certificate', issuer: 'CNAM' },
    ],
  },
  languages: {
    heading: 'Languages',
    items: [
      { name: 'French', level: 'Native' },
      { name: 'English', level: 'Professional — TOEIC 800' },
      { name: 'Arabic', level: 'Spoken (dialect)' },
    ],
  },
  contact: {
    text: 'Looking for a final-year internship in network automation, DevSecOps or cloud security from April 2027. The best way to reach me is LinkedIn.',
  },
  footer: { backToTop: 'Back to top ↑' },
}
