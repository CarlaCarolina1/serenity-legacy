import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Resources.css'

const resources = [
  {
    title: 'Market Reports',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    description: 'Stay informed about the Central Florida real estate market with our latest reports, trends, and insights.',
    features: [
      'Monthly market statistics',
      'Price trend analysis',
      'Neighborhood comparisons',
      'Investment opportunities'
    ]
  },
  {
    title: 'Neighborhood Guides',
    icon: '🗺️',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop',
    description: 'Explore different neighborhoods in Central Florida and find the perfect area that matches your lifestyle.',
    features: [
      'Community profiles',
      'Local amenities',
      'School ratings',
      'Transportation access'
    ]
  },
  {
    title: 'School Information',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=80',
    description: 'Find comprehensive information about schools in the areas you\'re considering for your family.',
    features: [
      'School ratings and reviews',
      'District information',
      'Extracurricular programs',
      'Performance metrics'
    ]
  },
  {
    title: 'HOA Information',
    icon: '🏘️',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    description: 'Understand HOA fees, rules, and amenities for properties in managed communities.',
    features: [
      'Fee structures',
      'Community rules',
      'Amenities included',
      'Governance details'
    ]
  },
  {
    title: 'Buyer\'s Guide',
    icon: '📖',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    description: 'Essential information and tips for first-time and experienced home buyers in Central Florida.',
    features: [
      'Step-by-step process',
      'Financing options',
      'Inspection checklist',
      'Closing procedures'
    ]
  },
  {
    title: 'Seller\'s Guide',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop',
    description: 'Maximize your home\'s value with our comprehensive guide to selling your property.',
    features: [
      'Pricing strategies',
      'Home staging tips',
      'Marketing tactics',
      'Negotiation advice'
    ]
  }
]

const Resources = () => {
  return (
    <div className="resources-page">
      <SEO
        title="Real Estate Resources - Market Reports, Guides, and Information"
        description="Access valuable real estate resources including market reports, neighborhood guides, school information, HOA details, and comprehensive buyer and seller guides for Central Florida."
        keywords="real estate resources, market reports, neighborhood guides, school information, HOA information, buyer guide, seller guide, Central Florida real estate"
        url="https://serenitylegacy.net/resources"
      />

      <section className="resources-hero">
        <div className="resources-hero-content">
          <h1>Resources</h1>
          <p className="resources-subtitle">
            Helpful information and tools for your real estate journey
          </p>
        </div>
      </section>

      <section className="resources-grid-section">
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-image-wrapper">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="resource-image"
                />
                <div className="resource-icon-overlay">
                  <span className="resource-icon">{resource.icon}</span>
                </div>
              </div>
              <div className="resource-content">
                <h2 className="resource-title">{resource.title}</h2>
                <p className="resource-description">{resource.description}</p>
                <ul className="resource-features">
                  {resource.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="resource-cta-button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Resources

