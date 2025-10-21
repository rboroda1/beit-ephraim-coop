import './Hero.css'
import heroImage from '../assets/images/hero/bayit-group-pic.jpeg'
import SplitText from './SplitText'

function Hero() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Bayit community group photo" className="hero-image" />
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <SplitText
            text="Welcome to the Columbia Bayit"
            className="hero-title"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="hero-subtitle">
            Come live at the Beit Ephraim Food Co-Op!
          </p>
          <p className="hero-description">
            Experience sustainable living, community cooking, and lifelong friendships
            in our cooperative housing environment.
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