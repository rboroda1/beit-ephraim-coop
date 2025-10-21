import './Residents.css'
import memorandumPdf from '/Bayit Memorandum.pdf'

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
                  <p>Complete our online application form.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Interview</h4>
                  <p>Participate in a casual interview with current residents.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Come to Bayit Dinner</h4>
                  <p>Meet some current Bayitniks, get to know our space, and see what Bayit dinner is usually like!</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Decision</h4>
                  <p>Receive notification about your application status around two weeks after deadline. When we reach out, we'll either offer a spot in the house for the following semester, offer a spot on the waitlist, or not offer a spot. Waitlisted applicants are voted on in the future rounds of the semester.</p>
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
                  src={memorandumPdf}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  title="Bayit Memorandum"
                >
                  <p>Your browser does not support PDFs.
                    <a href={memorandumPdf}>Download the PDF</a>
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

          <div className="info-section">
            <h3>Application Form</h3>
            <div className="application-form-container">
              <p className="form-description">
                Ready to apply? Fill out our application form <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUmaAkJAw0D7R3LviHody_RbH5JchRVHGtA8UgExzSorRUqg/viewform?usp=dialog" target="_blank">here</a> to get started.
              </p>
              {/* <div className="google-form-embed">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe_PLACEHOLDER_FORM_ID/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Bayit Application Form"
                >
                  Loading form...
                </iframe>
              </div>
              <p className="form-note">
                Having trouble with the form? <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_PLACEHOLDER_FORM_ID/viewform" target="_blank" rel="noopener noreferrer">Open it in a new tab</a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Residents