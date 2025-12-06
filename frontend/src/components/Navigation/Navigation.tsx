import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      {/* Top Right Buttons */}
      <div className="nav-top-buttons">
        <Link to="/properties" className="nav-button">
          Preview Homes
        </Link>
        <Link to="/map" className="nav-button">
          Map
        </Link>
        <Link to="/calculator" className="nav-button">
          Financing Calculator
        </Link>
        <Link to="/search" className="nav-button">
          Search 4 Homes
        </Link>
        <Link to="/contact" className="nav-button nav-button-primary">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle (for mobile) */}
      <button className="nav-mobile-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Main Menu (for desktop) */}
      <ul className="nav-main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

