import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Contact Header */}
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">Let's Connect</h2>
          <p className="hero-subtitle">
            Interested in discussing your DevOps needs? Reach out below
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Send me a Message</h2>
            {submitted && (
              <div className="success-message">
                ✓ Thank you for reaching out! I'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  rows="5"
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </p>
            </div>

            <div className="info-card">
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Your City, Country</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Willing to work remotely
              </p>
            </div>

            <div className="info-card">
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>

            <div className="info-card">
              <h3>Response Time</h3>
              <p>I typically respond to inquiries within 24-48 hours during business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
