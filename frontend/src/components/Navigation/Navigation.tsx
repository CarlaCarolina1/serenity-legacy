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
          <Link to="/calculator" onClick={closeMenu}>Calculator</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

