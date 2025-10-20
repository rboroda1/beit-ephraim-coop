import './Residents.css'

function Residents() {
  return (
    <section id="residents" className="residents">
      <div className="container">
        <h2>Information for Prospective Residents</h2>

        <div className="residents-content">
          <div className="info-section">
            <h3>What We Offer</h3>
            <ul className="benefits-list">
              <li>Shared meals and cooking responsibilities</li>
              <li>Vibrant and pluralistic Jewish community</li>
              <li>Kosher kitchen and weekly potluck Shabbat dinner</li>
              <li>Regular social events and activities</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Expectations & Responsibilities</h3>
            <ul className="responsibilities-list">
              <li>Pay a "Kuppah" sum (generally around $1000 per semester) that covers all groceries, subscriptions, laundry supplies, and other essentials</li>
              <li>Complete weekly "Toranut" chores to keep the house clean and a great space to be in</li>
              <li>Participate in regular house meetings</li>
              <li>Plan a meal (with a partner) 3-4 times each semester</li>
              <li>Respect community guidelines and house rules</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Application Process</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Submit Application</h4>
                  <p>Complete our online application form with personal information and housing preferences.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>House Visit</h4>
                  <p>Schedule a visit to meet current residents and experience our community firsthand.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Interview</h4>
                  <p>Participate in a casual interview with current residents.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Decision</h4>
                  <p>Receive notification about your application status within two weeks of deadline.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Housing Details</h3>
            <div className="housing-grid">
              <div className="housing-item">
                <strong>Location:</strong> 112th Street - Just 2 blocks from Columbia's campus!
              </div>
              <div className="housing-item">
                <strong>Capacity:</strong> 30 residents
              </div>
              <div className="housing-item">
                <strong>Room Types:</strong> Single-occupancy
              </div>
              <div className="housing-item">
                <strong>Lease Terms:</strong> Academic year or full year options
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Memorandum</h3>
            <div className="memorandum-container">
              <div className="pdf-viewer">
                <iframe
                  src="public/Bayit Memorandum.pdf"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  title="Bayit Memorandum"
                >
                  <p>Your browser does not support PDFs.
                    <a href="public/Bayit Memorandum.pdf">Download the PDF</a>
                  </p>
                </iframe>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-container">
              <p className="faq-placeholder">
                FAQ content will be added here soon. Check back for answers to common questions about living at the Bayit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Residents