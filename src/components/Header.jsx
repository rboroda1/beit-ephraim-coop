import { useState } from 'react'
import './Header.css'
import logo from '../assets/images/logos/Cooking Pot Logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Bayit Logo" className="logo-image" />
          <h2>The Bayit @ Columbia</h2>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('gallery')}>Gallery</button>
          <button onClick={() => scrollToSection('rooms')}>Rooms</button>
          <button onClick={() => scrollToSection('testimonials')}>Testimonials</button>
          <button onClick={() => scrollToSection('press')}>Press</button>
          <button onClick={() => scrollToSection('residents')}>Residency</button>
          <button onClick={() => scrollToSection('archive')}>Archive</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header