import './Skills.css'

function Skills() {
  return (
    <section className="skills">
      <h1>Compétences</h1>

      <div className="skills-grid">

        <div className="skill-card">
          <h2>Langages de programmation</h2>
          <ul>
            <li>C</li>
            <li>Python (pandas, numpy, matplotlib, scikit-learn, regex)</li>
            <li>Java</li>
            <li>SQL</li>
            <li>JavaScript / TypeScript</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2>Développement web & mobile</h2>
          <ul>
            <li>HTML / CSS</li>
            <li>React / Vite</li>
            <li>React Native</li>
            <li>Flask</li>
            <li>Django</li>
            <li>FastAPI</li>
            <li>API REST / Swagger</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2>Bases de données</h2>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Conception et gestion de bases SQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2>Outils & environnements</h2>
          <ul>
            <li>Git / GitHub</li>
            <li>Docker</li>
            <li>Virtualisation</li>
            <li>Jupyter Notebook</li>
            <li>Figma</li>
            <li>Trello / Jira</li>
            <li>Pack Office</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2>Langues</h2>
          <ul>
            <li>Français – Langue maternelle</li>
            <li>Anglais – Niveau B2 (TOEIC 800)</li>
            <li>Arabe – Dialecte</li>
          </ul>
        </div>

        <div className="skill-card">
          <h2>Soft skills</h2>
          <ul>
            <li>Organisation</li>
            <li>Rigueur</li>
            <li>Autonomie</li>
            <li>Adaptabilité</li>
            <li>Esprit d’équipe</li>
            <li>Gestion des responsabilités</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Skills