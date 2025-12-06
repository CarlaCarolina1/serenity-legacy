import { siteContent } from '../../data/siteContent'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{siteContent.footer.companyName}</h3>
            <p>{siteContent.footer.tagline}</p>
          </div>
          <div className="footer-section">
            <h4>{siteContent.footer.contactTitle}</h4>
            {siteContent.contactInfo.phone && (
              <p>
                <a href={`tel:${siteContent.contactInfo.phone.replace(/\D/g, '')}`}>{siteContent.contactInfo.phone}</a>
              </p>
            )}
            {siteContent.contactInfo.email && (
              <p>
                <a href={`mailto:${siteContent.contactInfo.email}`}>{siteContent.contactInfo.email}</a>
              </p>
            )}
            <p>{siteContent.contactInfo.location}</p>
            <p>
              <a href="/contact">Get in Touch</a>
            </p>
          </div>
          <div className="footer-section">
            <h4>{siteContent.footer.servicesTitle}</h4>
            <ul>
              {siteContent.footer.services.map((service, index) => (
                <li key={index}>
                  <a href="/services">{service}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {siteContent.footer.companyName}. {siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

