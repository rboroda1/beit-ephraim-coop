import './Hero.css'
import heroImage from '../assets/images/hero/bayit-group-pic.jpeg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Bayit community group photo" className="hero-image" />
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to the Columbia/Barnard Bayit</h1>
          <p className="hero-subtitle">
            Come live at the Beit Ephraim Food Co-Op!
          </p>
          <p className="hero-description">
            *Some description - will add later*
          </p>
          <button
            className="cta-button"
            onClick={() => document.getElementById('residents')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn About Living Here
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero