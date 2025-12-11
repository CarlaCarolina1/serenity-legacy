import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Services.css'

const services = [
  {
    title: 'Buy a Home',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    description: 'Find your perfect home in Central Florida with expert guidance through every step of the buying process.',
    features: [
      'Property search and matching',
      'Market analysis and pricing',
      'Negotiation and contract management',
      'Home inspection coordination',
      'Closing assistance'
    ],
    cta: 'Start Your Home Search',
    ctaLink: '/contact'
  },
  {
    title: 'Sell Your Home',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&h=400&fit=crop',
    description: 'Maximize your home\'s value with professional marketing, strategic pricing, and expert negotiation.',
    features: [
      'Market analysis and pricing strategy',
      'Professional photography and staging',
      'Marketing and advertising',
      'Open house coordination',
      'Negotiation and closing'
    ],
    cta: 'Get a Free Home Valuation',
    ctaLink: '/contact'
  },
  {
    title: 'Investment Properties',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400&fit=crop', // Different investment property image
    description: 'Build your real estate portfolio with Orlando\'s best investment opportunities and strong rental potential.',
    features: [
      'Investment property analysis',
      'ROI calculations and projections',
      'Rental market insights',
      'Property management referrals',
      'Portfolio building strategies'
    ],
    cta: 'Explore Investment Opportunities',
    ctaLink: '/contact'
  },
  {
    title: 'Long-term Rentals',
    icon: '🔑',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
    description: 'Find the perfect rental property for your needs, whether relocating or looking for a long-term home.',
    features: [
      'Rental property search',
      'Application assistance',
      'Lease negotiation',
      'Neighborhood insights',
      'Relocation support'
    ],
    cta: 'Find Your Rental',
    ctaLink: '/contact'
  }
]

const Services = () => {
  return (
    <div className="services-page">
      <SEO
        title="Real Estate Services - Buying, Selling, and Investing in Properties"
        description="Expert real estate services for buying properties, selling properties, land sales, new residential homes, commercial real estate, and customizable homes in Central Florida. Professional guidance for all your real estate needs."
        keywords="real estate services, buying properties, selling properties, land sales, new residential homes, commercial real estate, customizable homes, property investment, real estate consultation, Orlando real estate services"
        url="https://serenitylegacy.net/services"
      />

      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p className="services-subtitle">
            Comprehensive real estate services tailored to your needs
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-icon-overlay">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
              <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={service.ctaLink} className="service-cta-button">
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services

