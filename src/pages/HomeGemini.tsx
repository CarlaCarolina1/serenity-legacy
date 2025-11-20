import { Link } from 'react-router-dom'
import { siteContent } from '../data/siteContent'
import './HomeGemini.css'

const HomeGemini = () => {
  return (
    <div className="home-gemini">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(/hero-bg.png)` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              <span className="title-script">Discover</span>
              <br />
              Your Dream Sanctuary
            </h1>
            <p className="hero-subtitle">
              Exclusive properties in Central Florida's most coveted neighborhoods.
            </p>
            <div className="hero-actions">
              <Link to="/properties" className="btn btn-primary">
                Explore Properties
              </Link>
              <Link to="/calculator" className="btn btn-outline">
                Mortgage Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Intro */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2 className="section-heading">Elevating Your Real Estate Experience</h2>
              <p className="section-text">
                We believe that home is more than just a place—it's a feeling. 
                With a focus on personalized service and market expertise, we guide you 
                through every step of your journey to finding the perfect property.
              </p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="intro-image-wrapper">
              <div className="intro-card glass-card">
                <h3>Why Choose Us?</h3>
                <ul className="benefit-list">
                  <li>✓ Exclusive Market Access</li>
                  <li>✓ Personalized Concierge Service</li>
                  <li>✓ Expert Negotiation</li>
                  <li>✓ Seamless Transaction Process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-heading text-center">Our Services</h2>
          <div className="services-grid">
            {siteContent.home.services.items.map((service, index) => (
              <div key={index} className="service-card-gemini">
                <div className="service-icon">✦</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link-gemini">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Parallax */}
      <section className="neighborhoods-section">
        <div className="container">
          <h2 className="section-heading text-center mb-5">Curated Neighborhoods</h2>
          <div className="neighborhoods-grid-gemini">
            {siteContent.home.neighborhoods.items.map((neighborhood, index) => (
              <div 
                key={index} 
                className="neighborhood-card-gemini"
                style={{
                  backgroundImage: neighborhood.image ? `url(${neighborhood.image})` : 'none',
                }}
              >
                <div className="neighborhood-overlay-gemini">
                  <div className="neighborhood-content">
                    <h3>{neighborhood.name}</h3>
                    <p>{neighborhood.description}</p>
                    <Link to="/properties" className="btn btn-sm btn-light">View Homes</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section-gemini">
        <div className="container">
          <div className="cta-box glass-card">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Let's turn your real estate dreams into reality today.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeGemini
