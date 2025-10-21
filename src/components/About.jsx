import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Our Community</h2>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🍽️</div>
            <h3>Cooperative Cooking</h3>
            <p>
              *Spiel about cooking/food at Bayit*
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">✡︎</div>
            <h3>Jewish Living</h3>
            <p>
              *Spiel about Jewish living*
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🤝</div>
            <h3>Community Values</h3>
            <p>
              *Spiel about how we've been around for a long time, value community living*
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About