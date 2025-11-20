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
            <img src="/logo-horizontal.svg" alt={siteContent.siteName} className="logo-image" />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  )
}

export default Header

