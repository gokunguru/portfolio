import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>

      <p className="contact-intro">
        N’hésitez pas à me contacter pour toute opportunité de stage,
        de projet ou de collaboration.
      </p>

      <div className="contact-cards">

        <div className="contact-card">
          <h2>Email</h2>
          <p>
            <a href="mailto:[redacted]">
              [redacted]
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h2>Téléphone / WhatsApp</h2>
          <p>
            <a href="tel:[redacted]">
              [redacted]
            </a>
          </p>
          <p className="contact-note">
            Disponible également via WhatsApp
          </p>
        </div>

        <div className="contact-card">
          <h2>GitHub</h2>
          <p>
            <a
              href="https://github.com/gokunguru"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/gokunguru
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact