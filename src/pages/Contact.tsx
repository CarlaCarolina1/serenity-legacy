import { useState } from 'react'
import { contactApi } from '../services/api'
import { useSearchParams } from 'react-router-dom'
import { siteContent } from '../data/siteContent'
import SEO from '../components/SEO'
import './Contact.css'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const propertyId = searchParams.get('property')
  const [activeTab, setActiveTab] = useState<'contact' | 'appointment'>('contact')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: '',
  })
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await contactApi.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message,
        property_id: propertyId ? parseInt(propertyId) : undefined,
        interest_type: formData.propertyInterest || undefined,
        submission_type: 'contact',
      })
      setSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyInterest: '',
      })
    } catch (err) {
      console.error('Failed to submit contact form:', err)
      setError(siteContent.contact.form.errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    if (!appointmentData.preferredDate || !appointmentData.preferredTime) {
      setError('Please select both a date and time for your appointment.')
      setSubmitting(false)
      return
    }

    try {
      await contactApi.submit({
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone || undefined,
        message: appointmentData.message || `Appointment request for ${appointmentData.preferredDate} at ${appointmentData.preferredTime}`,
        submission_type: 'appointment',
        preferred_date: appointmentData.preferredDate,
        preferred_time: appointmentData.preferredTime,
      })
      setSubmitted(true)
      // Reset form
      setAppointmentData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      })
    } catch (err) {
      console.error('Failed to submit appointment request:', err)
      setError(siteContent.contact.appointment.form.errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contact-page">
      <SEO
        title="Contact Us - Real Estate Consultation in Central Florida"
        description="Contact Carla for expert real estate services. Get help with buying properties, selling properties, land sales, new residential homes, commercial real estate, and customizable homes in Orlando and Central Florida."
        keywords="contact real estate agent, real estate consultation, Orlando realtor contact, property inquiry, real estate services contact"
        url="https://serenitylegacy.net/contact"
      />
      <section className="contact-hero">
        <div className="container">
          <h1>{siteContent.contact.title}</h1>
          <p className="contact-subtitle">{siteContent.contact.subtitle}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{siteContent.contact.info.title}</h2>
              <p>
                {siteContent.contact.info.description}
              </p>
              <div className="contact-details">
                {siteContent.contactInfo.phone && (
                  <div className="contact-detail-card">
                    <div className="contact-icon">📞</div>
                    <p>
                      <strong>Phone:</strong> <a href={`tel:${siteContent.contactInfo.phone.replace(/\D/g, '')}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{siteContent.contactInfo.phone}</a>
                    </p>
                  </div>
                )}
                {siteContent.contactInfo.email && (
                  <div className="contact-detail-card">
                    <div className="contact-icon">✉️</div>
                    <p>
                      <strong>Email:</strong> <a href={`mailto:${siteContent.contactInfo.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{siteContent.contactInfo.email}</a>
                    </p>
                  </div>
                )}
                <div className="contact-detail-card">
                  <div className="contact-icon">📍</div>
                  <p>
                    <strong>Location:</strong> {siteContent.contactInfo.location}
                  </p>
                </div>
                <div className="contact-detail-card">
                  <div className="contact-icon">🏘️</div>
                  <p>
                    <strong>Service Areas:</strong> {siteContent.contactInfo.serviceAreas}
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {/* Tab Navigation */}
              <div className="contact-tabs">
                <button
                  type="button"
                  className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('contact')
                    setSubmitted(false)
                    setError(null)
                  }}
                >
                  Send Message
                </button>
                <button
                  type="button"
                  className={`tab-button ${activeTab === 'appointment' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('appointment')
                    setSubmitted(false)
                    setError(null)
                  }}
                >
                  Schedule Appointment
                </button>
              </div>

              {submitted && (
                <div className="form-success">
                  <p>{activeTab === 'contact' ? siteContent.contact.form.successMessage : siteContent.contact.appointment.form.successMessage}</p>
                </div>
              )}
              
              {error && (
                <div className="form-error">
                  <p>{error}</p>
                </div>
              )}

              {/* Contact Form */}
              {activeTab === 'contact' && (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{siteContent.contact.form.nameLabel} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.namePlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{siteContent.contact.form.emailLabel} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.emailPlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{siteContent.contact.form.phoneLabel}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.phonePlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="propertyInterest">{siteContent.contact.form.propertyInterestLabel}</label>
                  <select
                    id="propertyInterest"
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    {siteContent.contact.form.propertyInterestOptions.map((option, index) => (
                      <option key={index} value={option.toLowerCase().replace(/\s+/g, '_')}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{siteContent.contact.form.messageLabel} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={siteContent.contact.form.messagePlaceholder}
                    required
                  />
                </div>

                <div className="form-disclaimer">
                  <p>
                    <strong>Privacy Notice:</strong> A real person will contact you. Your
                    information will not be sold or telemarketed to 3rd party companies.
                  </p>
                </div>

                <button type="submit" className="submit-button" disabled={submitting || submitted}>
                  {submitting ? siteContent.contact.form.submittingButton : submitted ? 'Message Sent!' : siteContent.contact.form.submitButton}
                </button>
              </form>
              )}

              {/* Appointment Form */}
              {activeTab === 'appointment' && (
              <form className="contact-form" onSubmit={handleAppointmentSubmit}>
                <div className="form-group">
                  <label htmlFor="appointment-name">{siteContent.contact.appointment.form.nameLabel} *</label>
                  <input
                    type="text"
                    id="appointment-name"
                    name="name"
                    value={appointmentData.name}
                    onChange={handleAppointmentChange}
                    placeholder={siteContent.contact.appointment.form.namePlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="appointment-email">{siteContent.contact.appointment.form.emailLabel} *</label>
                  <input
                    type="email"
                    id="appointment-email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleAppointmentChange}
                    placeholder={siteContent.contact.appointment.form.emailPlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="appointment-phone">{siteContent.contact.appointment.form.phoneLabel} *</label>
                  <input
                    type="tel"
                    id="appointment-phone"
                    name="phone"
                    value={appointmentData.phone}
                    onChange={handleAppointmentChange}
                    placeholder={siteContent.contact.appointment.form.phonePlaceholder}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredDate">{siteContent.contact.appointment.form.preferredDateLabel} *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={appointmentData.preferredDate}
                    onChange={handleAppointmentChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredTime">{siteContent.contact.appointment.form.preferredTimeLabel} *</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={appointmentData.preferredTime}
                    onChange={handleAppointmentChange}
                    required
                  >
                    <option value="">Select a time</option>
                    {siteContent.contact.appointment.form.timeOptions.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="appointment-message">{siteContent.contact.appointment.form.messageLabel}</label>
                  <textarea
                    id="appointment-message"
                    name="message"
                    rows={4}
                    value={appointmentData.message}
                    onChange={handleAppointmentChange}
                    placeholder={siteContent.contact.appointment.form.messagePlaceholder}
                  />
                </div>

                <div className="form-disclaimer">
                  <p>
                    <strong>Privacy Notice:</strong> A real person will contact you. Your
                    information will not be sold or telemarketed to 3rd party companies.
                  </p>
                </div>

                <button type="submit" className="submit-button" disabled={submitting || submitted}>
                  {submitting ? siteContent.contact.appointment.form.submittingButton : submitted ? 'Appointment Requested!' : siteContent.contact.appointment.form.submitButton}
                </button>

                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>
                    {siteContent.contact.appointment.form.callDirectly}
                  </p>
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

