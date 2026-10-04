// Language-independent data: proper nouns, URLs, tech stacks and the
// terminal sample. Everything translatable lives in en.ts / fr.ts.
export const common = {
  name: 'Kamil Mandi',
  initials: 'KM',
  copyright: '© 2026 Kamil Mandi',
  github: { label: 'GitHub', url: 'https://github.com/gokunguru' },
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kamil-mandi-b86aa3415/' },
  terminal: {
    prompt: '$',
    command: 'ansible-playbook audit.yml',
    ok: 'ok',
    result: '=42 changed=0 failed=0',
    verdict: '✓ compliant',
  },
  langLabels: { fr: 'FR', en: 'EN' },
}

const gh = (repo: string) => `https://github.com/gokunguru/${repo}`

export const repos = {
  ordocare: { name: 'OrdoCare', repo: gh('Ordocare'), stack: ['React Native', 'Django REST', 'FastAPI', 'TrOCR', 'NLLB-200', 'Docker'] },
  compliance: {
    name: 'network-compliance-ansible',
    repo: gh('network-compliance-ansible'),
    stack: ['Ansible', 'Jinja2', 'ansible-lint', 'gitleaks', 'GitHub Actions'],
  },
  zeroTrust: {
    name: 'secure-multicloud-zero-trust',
    repo: gh('secure-multicloud-zero-trust'),
    stack: ['Terraform', 'AWS', 'tfsec', 'Checkov', 'gitleaks'],
  },
  hardening: { name: 'audit-hardening', repo: gh('audit-hardening'), stack: ['Ansible', 'Lynis', 'Docker', 'GitHub Actions'] },
  sre: { name: 'SRE-toolkit', repo: gh('SRE-toolkit'), stack: ['Terraform', 'Ansible', 'AWS', 'Prometheus', 'Grafana', 'Locust'] },
  observability: {
    name: 'automated-observability-monitoring-platform',
    repo: gh('automated-observability-monitoring-platform'),
    stack: ['Ansible', 'Docker', 'Prometheus', 'Grafana'],
  },
}

export const bouyguesStack = ['Ansible', 'Python', 'Cisco IOS', 'Huawei VRP', 'Ekinops']
export const networkSkills = ['Cisco IOS', 'Huawei VRP', 'Ekinops', 'OSPF / EIGRP', 'VLAN / STP', 'DHCP', 'QoS / ACL', 'NAT', 'Containerlab', 'FRRouting']
export const automationSkills = ['Ansible', 'Molecule', 'Python', 'Terraform', 'Jinja2', 'Bash', 'GitHub Actions', 'GitLab CI', 'Git']
export const cloudSkills = ['AWS (VPC, EC2, IAM, WAF)', 'GuardDuty / CloudTrail', 'Azure', 'Docker', 'Nginx', 'Prometheus', 'Grafana', 'Alertmanager']
