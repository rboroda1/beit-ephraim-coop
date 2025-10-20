import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          Want to join our community or have questions? We'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:bayitrecruiter@gmail.com">bayitrecruiter@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📷</div>
              <div>
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/the_bayit/" target="_blank" rel="noopener noreferrer">@the_bayit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact