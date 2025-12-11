import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
      <button 
        className={`nav-mobile-toggle ${isMenuOpen ? 'open' : ''}`} 
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Main Menu */}
      <ul className={`nav-main-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>Services</Link>
        </li>
        <li>
          <Link to="/properties" onClick={closeMenu}>Properties</Link>
        </li>
        <li>
          <Link to="/resources" onClick={closeMenu}>Resources</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

