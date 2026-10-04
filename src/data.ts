export const profile = {
  name: 'Kamil Mandi',
  title: 'Network & Security Automation · DevSecOps · Cloud',
  tagline:
    'I automate networks and secure infrastructure — turning device configs, Linux hosts and cloud environments into code that can be audited, tested and validated in CI.',
  github: 'https://github.com/gokunguru',
  linkedin: 'https://www.linkedin.com/in/kamil-mandi-b86aa3415/',
}

export const about = {
  text: [
    'Final-year engineering student at ESIEA (Software Engineering), currently completing an MSc in Cybersecurity Management & Consulting through a double degree with SKEMA Business School.',
    'My work sits where networking, automation and security meet: multi-vendor network automation with Ansible and Python, infrastructure as code, and security controls built into the delivery pipeline.',
  ],
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
  extra: 'Founding member of the ESIEA Finance Club — built and run the club’s web platform.',
}

export const experience = [
  {
    role: 'Network Automation Engineer (Intern)',
    company: 'Bouygues Telecom Business',
    place: 'Paris, France',
    period: 'Apr 2026 – Aug 2026',
    points: [
      'Built Ansible and Python automation for enterprise WAN networks in multi-vendor environments (Cisco, Huawei, Ekinops).',
      'Industrialized large-scale, multi-site configuration compliance audits (QoS, ACL, VLAN, DHCP) and automated deployments.',
    ],
    stack: ['Ansible', 'Python', 'Cisco IOS', 'Huawei VRP', 'Ekinops'],
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
]

export type Project = {
  name: string
  repo: string
  description: string
  stack: string[]
  award?: string
}

export const featured: Project = {
  name: 'OrdoCare',
  repo: 'https://github.com/gokunguru/Ordocare',
  award: 'Technical Award ESIEA 2026',
  description:
    'Mobile app that digitizes medical prescriptions: OCR extraction, multilingual translation, medication reminders and history. React Native front end, Django REST API with JWT, and a FastAPI machine-learning service running TrOCR and NLLB-200, all containerized.',
  stack: ['React Native', 'Django REST', 'FastAPI', 'TrOCR', 'NLLB-200', 'Docker'],
}

export const projects: Project[] = [
  {
    name: 'network-compliance-ansible',
    repo: 'https://github.com/gokunguru/network-compliance-ansible',
    description:
      'Audits Cisco IOS configurations against YAML-defined security rules and builds a consolidated HTML compliance report. Runs fully offline, so the whole audit is tested in CI.',
    stack: ['Ansible', 'Jinja2', 'ansible-lint', 'gitleaks', 'GitHub Actions'],
  },
  {
    name: 'secure-multicloud-zero-trust',
    repo: 'https://github.com/gokunguru/secure-multicloud-zero-trust',
    description:
      'Zero Trust AWS foundation in Terraform: segmented VPC, least-privilege security groups, ALB with WAF, VPC endpoints, KMS-encrypted logs, CloudTrail, GuardDuty and Security Hub, plus a threat model.',
    stack: ['Terraform', 'AWS', 'tfsec', 'Checkov', 'gitleaks'],
  },
  {
    name: 'audit-hardening',
    repo: 'https://github.com/gokunguru/audit-hardening',
    description:
      'Audits a vulnerable Linux host, hardens it (SSH, UFW, Fail2ban, auditd), re-scans it with Lynis and publishes a before/after HTML report from a CI pipeline.',
    stack: ['Ansible', 'Lynis', 'Docker', 'GitHub Actions'],
  },
  {
    name: 'SRE-toolkit',
    repo: 'https://github.com/gokunguru/SRE-toolkit',
    description:
      'Provisions EC2 instances with Terraform, then configures an Nginx load balancer, a Flask API and Prometheus, Alertmanager and Grafana monitoring with Ansible. Load-tested with Locust.',
    stack: ['Terraform', 'Ansible', 'AWS', 'Prometheus', 'Grafana', 'Locust'],
  },
  {
    name: 'automated-observability-monitoring-platform',
    repo: 'https://github.com/gokunguru/automated-observability-monitoring-platform',
    description:
      'Bootstraps a Raspberry Pi, installs Docker and deploys a Prometheus, Node Exporter and Grafana monitoring stack with Ansible.',
    stack: ['Ansible', 'Docker', 'Prometheus', 'Grafana'],
  },
]

export const skills = [
  {
    group: 'Network',
    items: ['Cisco IOS', 'Huawei VRP', 'Ekinops', 'OSPF / EIGRP', 'VLAN / STP', 'DHCP', 'QoS / ACL', 'NAT', 'Containerlab', 'FRRouting'],
  },
  {
    group: 'Automation & IaC',
    items: ['Ansible', 'Molecule', 'Python', 'Terraform', 'Jinja2', 'Bash', 'GitHub Actions', 'GitLab CI', 'Git'],
  },
  {
    group: 'Security',
    items: ['Zero Trust', 'Linux hardening', 'Lynis', 'Fail2ban / auditd', 'tfsec', 'Checkov', 'gitleaks', 'Threat modeling', 'GRC'],
  },
  {
    group: 'Cloud & Ops',
    items: ['AWS (VPC, EC2, IAM, WAF)', 'GuardDuty / CloudTrail', 'Azure', 'Docker', 'Nginx', 'Prometheus', 'Grafana', 'Alertmanager'],
  },
]

export const certifications = [
  { name: 'Cisco CCNA', issuer: 'Cisco' },
  { name: 'Cybersecurity Analyst certificate', issuer: 'CNAM' },
]

export const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Professional — TOEIC 800' },
  { name: 'Arabic', level: 'Spoken (dialect)' },
]
