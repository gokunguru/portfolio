import './Projects.css'

function Projects() {
  return (
    <section className="projects">
      <h1>Projets</h1>

      <div className="project-card">
        <h2>BrisEats – Application web de livraison de repas</h2>

        <p className="project-context">
          Projet académique réalisé en équipe visant à concevoir une
          application web complète de commande et livraison de repas.
        </p>

        <p>
          J’ai participé au développement full stack de l’application,
          en travaillant sur la création de la base de données SQL,
          l’authentification des utilisateurs et la gestion des commandes
          via une interface web dynamique.
        </p>

        <p className="project-tech">
          <strong>Technologies :</strong> Python, Flask, SQL, HTML, CSS,
          Bootstrap
        </p>
      </div>

      <div className="project-card">
        <h2>Application web – Analyse et catalogue de films</h2>

        <p className="project-context">
          Application full stack permettant de consulter, filtrer et
          analyser des données issues d’un catalogue de films.
        </p>

        <p>
          J’ai développé le front-end en React avec affichage dynamique
          des données, ainsi que le back-end en Node.js exposant une API
          REST connectée à une base de données MySQL. La communication
          complète entre le front et le back permet l’interrogation et
          l’affichage en temps réel des informations.
        </p>

        <p className="project-tech">
          <strong>Technologies :</strong> React, JavaScript, API REST,
          Node.js, MySQL
        </p>
      </div>

      <div className="project-card">
        <h2>Ordocare – Application mobile de suivi de traitement médical</h2>

        <p className="project-context">
          Projet applicatif visant à faciliter la lecture des ordonnances
          médicales et le suivi des traitements par les patients.
        </p>

        <p>
          J’ai travaillé sur la conception d’une application mobile
          intégrant des technologies d’OCR et de traitement de documents
          PDF afin d’extraire automatiquement les informations des
          ordonnances. Les données sont ensuite structurées, affichées
          et utilisées pour proposer des rappels de prise de médicaments
          et un suivi du traitement.
        </p>

        <p className="project-tech">
          <strong>Technologies :</strong> Django, FastAPI, React Native,
          OCR, Regex, PostgreSQL, API REST
        </p>
      </div>
    </section>
  )
}

export default Projects