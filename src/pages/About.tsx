import './About.css'

function About() {
  return (
    <section className="about">
      <h1>À propos de moi</h1>

      <div className="about-block">
        <h2>Parcours académique</h2>
        <p>
          Je suis étudiant en 4ᵉ année d’école d’ingénieur informatique à
          l’ESIEA Paris, avec une spécialisation en Software Engineering.
          Mon parcours est orienté vers le développement logiciel,
          le web et les systèmes informatiques.
        </p>

        <p>
          J’ai également effectué un semestre à l’étranger à la
          Queensland University of Technology (Brisbane, Australie),
          où j’ai suivi des cours en systèmes, sécurité informatique
          et développement web. Cette expérience m’a permis de
          renforcer mon autonomie, mon adaptabilité et mon ouverture
          à un environnement international.
        </p>
      </div>

      <div className="about-block">
        <h2>Expériences professionnelles</h2>
        <p>
          J’occupe depuis plusieurs années un poste de chef d’équipe
          en manutention et production au sein de MF Industries.
          Cette expérience m’a permis de développer des compétences
          en gestion d’équipe, organisation du travail et respect
          des contraintes de sécurité et de qualité.
        </p>

        <p>
          J’ai également réalisé un stage en tant qu’assistant ingénieur
          systèmes et réseaux, durant lequel j’ai participé au
          déploiement de machines virtuelles, à la configuration réseau,
          à la sécurisation des postes et au support technique.
        </p>
      </div>

      <div className="about-block">
        <h2>Sport et engagement personnel</h2>
        <p>
          Le sport occupe une place importante dans mon quotidien.
          Je pratique régulièrement la musculation et la course à pied,
          et j’ai également une expérience en basketball.
        </p>

        <p>
          Ces pratiques sportives m’ont permis de développer des qualités
          essentielles dans le cadre professionnel, telles que la
          discipline, la persévérance, l’esprit d’équipe et la capacité
          à me fixer des objectifs sur le long terme.
        </p>
      </div>
    </section>
  )
}

export default About