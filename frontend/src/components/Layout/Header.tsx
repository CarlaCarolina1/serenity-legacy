import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { siteContent } from '../../data/siteContent'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">{siteContent.siteName}</span>
          </Link>
        </div>
        <Navigation />
        <div className="header-contact-quick">
          <a href={`tel:${siteContent.contactInfo.phone}`} className="header-phone-link">
            <span className="phone-text">{siteContent.contactInfo.phone}</span>
          </a>
        </div>
        <Link to="/contact" className="header-cta-button">
          Schedule Showing
        </Link>
      </div>
    </header>
  )
}

export default Header
