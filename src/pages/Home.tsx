import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { siteContent } from '../data/siteContent'
import SEO from '../components/SEO'
import { getLocalBusinessSchema, getWebsiteSchema } from '../utils/schema'
import './Home.css'

const Home = () => {
  // Array of luxury home images - will be updated with user's selection
  // Pre-loading images to prevent gray flashes
  const luxuryHomes = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2031&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dbe4eb5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607688969-a5fcd26c57e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600585154084-4e5f7f23b381?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2031&q=80'
  ]

  // Pre-load images to prevent gray flashes
  useEffect(() => {
    luxuryHomes.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % luxuryHomes.length)
    }, 7000) // Change image every 7 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [luxuryHomes.length])

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getWebsiteSchema()
    ]
  }

  return (
    <div className="home">
      <SEO
        title="Real Estate Properties, Land, and Customizable Homes in Central Florida"
        description="Buy, sell, and invest in real estate properties, land, new residential homes, commercial real estate, and customizable homes in Orlando, Clermont, and Central Florida. Expert real estate services for buying properties and selling properties."
        keywords="real estate, buying properties, selling properties, land, customizable homes, new residential, commercial real estate, Orlando real estate, Central Florida real estate, homes for sale, property investment, land for sale, new homes, customizable properties"
        url="https://serenitylegacy.net"
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section 
        className="home-hero"
        style={{
          backgroundImage: `url(${luxuryHomes[currentImageIndex]})`
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{siteContent.home.hero.title}</h1>
            <p className="hero-subtitle">
              {siteContent.home.hero.subtitle}
            </p>
            <div className="hero-cta">
              <Link to="/calculator" className="cta-button cta-button-large">
                {siteContent.home.hero.ctaPrimary}
              </Link>
              <Link to="/properties" className="cta-button cta-button-secondary">
                {siteContent.home.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services">
        <div className="container">
          <h2 className="section-title">{siteContent.home.services.title}</h2>
          <div className="services-grid">
            {siteContent.home.services.items.map((service, index) => {
              const icons = ['🏠', '🔑', '📊', '📅'];
              return (
                <div key={index} className="service-card">
                  <div className="service-icon">{icons[index] || '✦'}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section - Exact Copy from Gemini */}
      <section className="neighborhoods-section">
        <div className="container">
          <h2 className="section-heading text-center mb-5">{siteContent.home.neighborhoods.title}</h2>
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

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{siteContent.home.cta.title}</h2>
            <p>{siteContent.home.cta.subtitle}</p>
            <Link to="/contact" className="cta-button cta-button-large">
              {siteContent.home.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

