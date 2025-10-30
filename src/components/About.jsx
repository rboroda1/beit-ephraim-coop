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
              Food in the Bayit is purchased collectively and abides by the Orthodox Kashrut standards shared by our kitchen. Each weeknight, a pair of Bayitniks cooks dinner for the whole Bayit to eat as a community. On Friday nights, we have a big potluck for Shabbat!
            </p>
          </div>

          <div className={`about-card ${visibleCards.has(1) ? 'animate-in' : ''}`}>
            <div className="card-icon">✡︎</div>
            <h3>Jewish Pluralism</h3>
            <p>
              The Bayit is founded on principles of pluralism and diversity, welcoming Jewish students from all backgrounds and levels of observance to celebrate their identity and practices in our community. We maintain a kosher kitchen and Shabbat zones while also encouraging personal freedom in shared spaces.
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