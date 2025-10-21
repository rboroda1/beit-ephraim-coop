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
            <h3>Jewish Pluralism</h3>
            <p>
              *Spiel about Jewish living*
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🤝</div>
            <h3>Community History</h3>
            <p>
              Founded in the Fall of 1972 by twenty-eight initial members, the Bayit is the nation's oldest student-run Jewish housing co-op. It remains a diverse and inclusive space at Columbia and Barnard for Jewish students who want to live communally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About