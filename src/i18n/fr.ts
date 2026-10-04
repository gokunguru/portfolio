import { automationSkills, bouyguesStack, cloudSkills, networkSkills, repos } from './common'
import type { Content } from './types'

export const fr: Content = {
  meta: {
    title: 'Kamil Mandi · Automatisation réseau & sécurité',
    description:
      'Kamil Mandi — Automatisation réseau & sécurité · DevSecOps · Cloud. Étudiant ingénieur à l’ESIEA et en MSc Cybersecurity Management & Consulting (ESIEA × SKEMA).',
  },
  a11y: {
    backToTop: 'Retour en haut',
    toggleMenu: 'Ouvrir ou fermer le menu',
    switchLang: 'Langue',
    topology: 'Illustration d’une topologie réseau',
  },
  nav: { about: 'À propos', experience: 'Expérience', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
  sections: {
    about: { label: '01 · À propos', title: 'Parcours' },
    experience: { label: '02 · Expérience', title: 'Parcours professionnel' },
    projects: { label: '03 · Projets', title: 'Projets phares' },
    skills: { label: '04 · Compétences', title: 'Compétences techniques' },
    contact: { label: '05 · Contact', title: 'Échangeons' },
  },
  hero: {
    status: 'Disponible pour un stage de fin d’études — avril 2027, Paris',
    title: 'Automatisation réseau & sécurité · DevSecOps · Cloud',
    tagline:
      'J’automatise les réseaux et sécurise les infrastructures, en transformant configurations d’équipements, serveurs Linux et environnements cloud en code auditable, testé et validé en CI.',
  },
  about: {
    text: [
      'Étudiant en dernière année d’école d’ingénieurs à l’ESIEA (spécialité Software Engineering), je poursuis un MSc Cybersecurity Management & Consulting en double diplôme avec SKEMA Business School.',
      'Je travaille à la croisée du réseau, de l’automatisation et de la sécurité : automatisation réseau multi-constructeurs avec Ansible et Python, Infrastructure as Code et contrôles de sécurité intégrés au pipeline de livraison.',
    ],
    extra: 'Membre fondateur du Club Finance de l’ESIEA, pour lequel j’ai réalisé le site web.',
    path: [
      {
        period: '2022 – 2027',
        school: 'ESIEA',
        place: 'Paris, France',
        detail: 'Diplôme d’ingénieur en informatique, spécialité Software Engineering',
      },
      {
        period: 'févr. – juin 2025',
        school: 'Queensland University of Technology',
        place: 'Brisbane, Australie',
        detail: 'Semestre d’échange : Computer Systems and Security, Web Computing, Web Development with Databases',
      },
      {
        period: '2026 – 2027',
        school: 'ESIEA × SKEMA Business School',
        place: 'Paris, France',
        detail:
          'MSc Cybersecurity Management & Consulting : cybersécurité technique, gouvernance, risques et conformité (GRC), management',
      },
    ],
  },
  experience: [
    {
      role: 'Ingénieur automatisation réseau (stage)',
      company: 'Bouygues Telecom Business',
      place: 'Paris, France',
      period: 'avr. 2026 – août 2026',
      points: [
        'Développement d’automatisations Ansible et Python pour des réseaux WAN d’entreprise multi-constructeurs (Cisco, Huawei, Ekinops).',
        'Industrialisation d’audits de conformité à fort volume sur des réseaux multi-sites (QoS, ACL, VLAN, DHCP) et de déploiements automatisés.',
      ],
      stack: bouyguesStack,
    },
    {
      role: 'Assistant ingénieur systèmes et réseaux (stage)',
      company: 'ICMT France',
      place: 'Cergy, France',
      period: 'juil. 2022 – août 2022',
      points: [
        'Déploiement de machines virtuelles et configuration réseau.',
        'Sécurisation des postes de travail, gestion des sauvegardes et support aux utilisateurs.',
        'Contribution à la résolution d’incidents techniques.',
      ],
      stack: ['Virtualisation', 'Réseau', 'Windows', 'Sauvegarde'],
    },
  ],
  projects: {
    featured: {
      ...repos.ordocare,
      award: 'Technical Award ESIEA 2026',
      description:
        'Application mobile de numérisation d’ordonnances médicales : extraction par OCR, traduction multilingue, rappels de prise et historique. Front-end React Native, API Django REST avec JWT et microservice de machine learning FastAPI (TrOCR, NLLB-200), le tout conteneurisé.',
    },
    list: [
      {
        ...repos.compliance,
        description:
          'Audite des configurations Cisco IOS selon des règles de sécurité décrites en YAML et génère un rapport de conformité HTML consolidé. Fonctionne entièrement hors ligne, ce qui permet de tester l’intégralité de l’audit en CI.',
      },
      {
        ...repos.zeroTrust,
        description:
          'Socle AWS Zero Trust en Terraform : VPC segmenté, security groups en moindre privilège, ALB avec WAF, VPC endpoints, logs chiffrés par KMS, CloudTrail, GuardDuty et Security Hub, avec un modèle de menaces.',
      },
      {
        ...repos.hardening,
        description:
          'Audite un serveur Linux vulnérable, le durcit (SSH, UFW, Fail2ban, auditd), le réanalyse avec Lynis et publie un rapport HTML avant/après depuis un pipeline CI.',
      },
      {
        ...repos.sre,
        description:
          'Provisionne des instances EC2 avec Terraform, puis configure avec Ansible un load balancer Nginx, une API Flask et un monitoring Prometheus, Alertmanager et Grafana. Tests de charge avec Locust.',
      },
      {
        ...repos.observability,
        description:
          'Prépare un Raspberry Pi, installe Docker et déploie avec Ansible une stack de monitoring Prometheus, Node Exporter et Grafana.',
      },
    ],
    more: 'Plus de projets sur GitHub',
  },
  skills: [
    { group: 'Réseau', items: networkSkills },
    { group: 'Automatisation & IaC', items: automationSkills },
    {
      group: 'Sécurité',
      items: ['Zero Trust', 'Durcissement Linux', 'Lynis', 'Fail2ban / auditd', 'tfsec', 'Checkov', 'gitleaks', 'Modélisation des menaces', 'GRC'],
    },
    { group: 'Cloud & Ops', items: cloudSkills },
  ],
  certifications: {
    heading: 'Certifications',
    tag: 'en cours',
    items: [
      { name: 'Cisco CCNA', issuer: 'Cisco' },
      { name: 'Certificat de compétence Analyste en cybersécurité', issuer: 'CNAM' },
    ],
  },
  languages: {
    heading: 'Langues',
    items: [
      { name: 'Français', level: 'Langue maternelle' },
      { name: 'Anglais', level: 'Professionnel — TOEIC 800' },
      { name: 'Arabe', level: 'Oral (dialecte)' },
    ],
  },
  contact: {
    text: 'Je recherche un stage de fin d’études en automatisation réseau, DevSecOps ou sécurité cloud à partir d’avril 2027. Le plus simple pour me joindre : LinkedIn.',
  },
  footer: { backToTop: 'Retour en haut ↑' },
}
