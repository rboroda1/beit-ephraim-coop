import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Beit Ephraim Food Co-Op</h4>
            <p>Building community through cooperative living since 1972</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>Gallery</button></li>
              <li><button onClick={() => document.getElementById('residents')?.scrollIntoView({ behavior: 'smooth' })}>For Residents</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/the_bayit/" aria-label="Instagram">📷</a>
              <a href="mailto:bayitrecruiter@gmail.com" aria-label="Email">📧</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Beit Ephraim Food Co-Op.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer