import React from 'react'
import { Link } from 'react-router-dom'
import './FooterCta.css'

interface Action {
  title: string
  description: string
}

interface FooterCtaProps {
  title: string
  subtitle: string
  actions: Action[]
  contactInfo: {
    email: string
    phone: string
    office: string
    license: string
    serviceAreas: string[]
  }
  closingText: string
  ctaPrimary: string
  ctaSecondary: string
}

const actionIcons = ['📞', '🔍', '🏠']

const FooterCta: React.FC<FooterCtaProps> = ({ 
  title, 
  subtitle, 
  actions,
  contactInfo,
  closingText,
  ctaPrimary,
  ctaSecondary
}) => {
  return (
    <section className="footer-cta-section">
      <div className="footer-cta-header">
        <h2 className="footer-cta-title">{title}</h2>
        <p className="footer-cta-subtitle">{subtitle}</p>
      </div>

      <div className="footer-cta-actions">
        {actions.map((action, index) => (
          <div key={index} className="footer-cta-action">
            <div className="footer-cta-action-icon">{actionIcons[index] || '✦'}</div>
            <h3 className="footer-cta-action-title">{action.title}</h3>
            <p className="footer-cta-action-description">{action.description}</p>
          </div>
        ))}
      </div>

      <h3 className="footer-cta-contact-title">Contact Carla Today</h3>

      <div className="footer-cta-contact">
        <div className="footer-cta-contact-info">
          <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>{contactInfo.phone}</a></p>
          <p><strong>Office:</strong> {contactInfo.office}</p>
          <p><strong>License:</strong> {contactInfo.license}</p>
        </div>
        <div className="footer-cta-service-areas">
          <p><strong>Service Areas:</strong></p>
          <ul>
            {contactInfo.serviceAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-cta-buttons">
        <Link to="/contact" className="cta-button">{ctaPrimary}</Link>
        <Link to="/properties" className="cta-button cta-button-secondary">{ctaSecondary}</Link>
      </div>

      <p className="footer-cta-closing">{closingText}</p>
    </section>
  )
}

export default FooterCta
