import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Beit Ephraim Food Co-Op</h4>
            <p>Building community through cooperative living since [Year]</p>
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
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="mailto:beitephraim@columbia.edu" aria-label="Email">📧</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Beit Ephraim Food Co-Op. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer