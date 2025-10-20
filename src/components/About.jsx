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
              Share meals, recipes, and cooking responsibilities with fellow residents.
              Our community kitchen is the heart of Beit Ephraim.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">✡️</div>
            <h3>Jewish Living</h3>
            <p>
              *Spiel about Jewish living*
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🤝</div>
            <h3>Community Values</h3>
            <p>
              Built on principles of cooperation, inclusivity, and mutual support.
              Everyone contributes to our shared living experience.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3>More</h3>
            <p>
              A supportive environment for Columbia and Barnard students to thrive
              academically while building lasting friendships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About