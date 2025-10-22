import './About.css'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

function About() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 })
  const [cardsRef, visibleCards] = useStaggeredAnimation(3, { staggerDelay: 200 })

  return (
    <section id="about" className="about">
      <div className="container">
        <h2
          ref={titleRef}
          className={`about-title ${titleVisible ? 'animate-in' : ''}`}
        >
          About Our Community
        </h2>

        <div
          ref={cardsRef}
          className="about-grid"
        >
          <div className={`about-card ${visibleCards.has(0) ? 'animate-in' : ''}`}>
            <div className="card-icon">🍽️</div>
            <h3>Cooperative Cooking</h3>
            <p>
              *Spiel about cooking/food at Bayit*
            </p>
          </div>

          <div className={`about-card ${visibleCards.has(1) ? 'animate-in' : ''}`}>
            <div className="card-icon">✡︎</div>
            <h3>Jewish Pluralism</h3>
            <p>
              *Spiel about Jewish living*
            </p>
          </div>

          <div className={`about-card ${visibleCards.has(2) ? 'animate-in' : ''}`}>
            <div className="card-icon">🤝</div>
            <h3>Community History</h3>
            <p>
              Founded in 1972 by 28 initial members, the Bayit is the nation's oldest student-run Jewish housing co-op. It remains a diverse and inclusive space for Jewish students at Columbia and Barnard who want to live communally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About