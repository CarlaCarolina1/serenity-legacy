import { Link } from 'react-router-dom'
import { siteContent } from '../data/siteContent'
import './HomeNeo.css'

const HomeNeo = () => {
  return (
    <div className="home-neo">
      {/* Hero Section - Full Screen with Background */}
      <section className="neo-hero">
        <div className="neo-hero-background"></div>
        <div className="neo-hero-overlay"></div>
        <div className="container neo-hero-container">
          <div className="neo-hero-content">
            <div className="neo-hero-badge">Discover Your Dream Home</div>
            <h1 className="neo-hero-title">
              <span className="neo-title-line-1">Discover Your Dream Home</span>
              <span className="neo-title-line-2">in Central Florida</span>
            </h1>
            <p className="neo-hero-subtitle">
              {siteContent.home.hero.subtitle}
            </p>
            <div className="neo-hero-cta">
              <Link to="/calculator" className="neo-btn neo-btn-primary neo-btn-large">
                <span>{siteContent.home.hero.ctaPrimary}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/properties" className="neo-btn neo-btn-secondary neo-btn-large">
                <span>{siteContent.home.hero.ctaSecondary}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10H17M17 10L12 5M17 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="neo-hero-stats">
              <div className="neo-stat">
                <div className="neo-stat-number">15+</div>
                <div className="neo-stat-label">Years Experience</div>
              </div>
              <div className="neo-stat">
                <div className="neo-stat-number">100%</div>
                <div className="neo-stat-label">Client Satisfaction</div>
              </div>
              <div className="neo-stat">
                <div className="neo-stat-number">500+</div>
                <div className="neo-stat-label">Homes Sold</div>
              </div>
            </div>
          </div>
        </div>
        <div className="neo-hero-scroll">
          <div className="neo-scroll-indicator"></div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="neo-value-prop">
        <div className="container">
          <div className="neo-value-grid">
            <div className="neo-value-content">
              <h2 className="neo-section-title">Your Trusted Real Estate Partner</h2>
              <p className="neo-section-text">
                At Serenity Legacy, we believe that finding your dream home should be an exciting journey, not a stressful experience. 
                With deep knowledge of Central Florida's real estate market, we guide you through every step with personalized service 
                and expert negotiation.
              </p>
              <div className="neo-value-features">
                <div className="neo-feature-item">
                  <div className="neo-feature-icon">✓</div>
                  <div className="neo-feature-text">
                    <strong>Exclusive Market Access</strong>
                    <span>First access to premium listings</span>
                  </div>
                </div>
                <div className="neo-feature-item">
                  <div className="neo-feature-icon">✓</div>
                  <div className="neo-feature-text">
                    <strong>Expert Negotiation</strong>
                    <span>Get the best deal possible</span>
                  </div>
                </div>
                <div className="neo-feature-item">
                  <div className="neo-feature-icon">✓</div>
                  <div className="neo-feature-text">
                    <strong>Personalized Service</strong>
                    <span>Tailored to your unique needs</span>
                  </div>
                </div>
                <div className="neo-feature-item">
                  <div className="neo-feature-icon">✓</div>
                  <div className="neo-feature-text">
                    <strong>Seamless Process</strong>
                    <span>From search to closing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="neo-value-visual">
              <div className="neo-visual-card">
                <div className="neo-card-header">
                  <h3>Why Choose Serenity Legacy?</h3>
                </div>
                <div className="neo-card-content">
                  <div className="neo-card-stat">
                    <span className="neo-card-number">15+</span>
                    <span className="neo-card-label">Years of Excellence</span>
                  </div>
                  <div className="neo-card-divider"></div>
                  <div className="neo-card-stat">
                    <span className="neo-card-number">100%</span>
                    <span className="neo-card-label">Client Satisfaction</span>
                  </div>
                  <div className="neo-card-divider"></div>
                  <div className="neo-card-stat">
                    <span className="neo-card-number">500+</span>
                    <span className="neo-card-label">Successful Transactions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="neo-services">
        <div className="container">
          <div className="neo-section-header">
            <h2 className="neo-section-title">{siteContent.home.services.title}</h2>
            <p className="neo-section-subtitle">Comprehensive real estate solutions tailored to your needs</p>
          </div>
          <div className="neo-services-grid">
            {siteContent.home.services.items.map((service, index) => (
              <div key={index} className="neo-service-card">
                <div className="neo-service-icon">
                  {index === 0 && '🏠'}
                  {index === 1 && '💰'}
                  {index === 2 && '📈'}
                  {index === 3 && '🔑'}
                </div>
                <h3 className="neo-service-title">{service.title}</h3>
                <p className="neo-service-description">{service.description}</p>
                <Link to="/services" className="neo-service-link">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section - Premium Cards */}
      <section className="neo-neighborhoods">
        <div className="container">
          <div className="neo-section-header">
            <h2 className="neo-section-title">{siteContent.home.neighborhoods.title}</h2>
            <p className="neo-section-subtitle">Explore Central Florida's most desirable communities</p>
          </div>
          <div className="neo-neighborhoods-grid">
            {siteContent.home.neighborhoods.items.map((neighborhood, index) => (
              <div 
                key={index} 
                className="neo-neighborhood-card"
                style={{
                  backgroundImage: neighborhood.image ? `url(${neighborhood.image})` : 'none',
                }}
              >
                <div className="neo-neighborhood-overlay">
                  <div className="neo-neighborhood-header">
                    <h3 className="neo-neighborhood-name">{neighborhood.name}</h3>
                  </div>
                  <p className="neo-neighborhood-description">{neighborhood.description}</p>
                  <Link to="/properties" className="neo-neighborhood-link">
                    View Properties
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="neo-cta">
        <div className="neo-cta-background"></div>
        <div className="container">
          <div className="neo-cta-content">
            <h2 className="neo-cta-title">{siteContent.home.cta.title}</h2>
            <p className="neo-cta-subtitle">{siteContent.home.cta.subtitle}</p>
            <Link to="/contact" className="neo-btn neo-btn-primary neo-btn-large neo-btn-cta">
              <span>{siteContent.home.cta.buttonText}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10H17M17 10L12 5M17 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeNeo

