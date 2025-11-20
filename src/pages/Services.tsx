import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="services-subtitle">
            Comprehensive real estate services tailored to your needs
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="service-detail">
            <h2>Buy a Home</h2>
            <p>
              Find your perfect home in Central Florida with expert guidance through every step
              of the buying process. From initial search to closing, we're here to help.
            </p>
            <ul>
              <li>Property search and matching</li>
              <li>Market analysis and pricing</li>
              <li>Negotiation and contract management</li>
              <li>Home inspection coordination</li>
              <li>Closing assistance</li>
            </ul>
            <Link to="/contact" className="service-cta">
              Start Your Home Search
            </Link>
          </div>

          <div className="service-detail">
            <h2>Sell Your Home</h2>
            <p>
              Maximize your home's value with professional marketing, strategic pricing, and expert
              negotiation. We'll help you sell quickly and for the best price.
            </p>
            <ul>
              <li>Market analysis and pricing strategy</li>
              <li>Professional photography and staging</li>
              <li>Marketing and advertising</li>
              <li>Open house coordination</li>
              <li>Negotiation and closing</li>
            </ul>
            <Link to="/contact" className="service-cta">
              Get a Free Home Valuation
            </Link>
          </div>

          <div className="service-detail">
            <h2>Investment Properties</h2>
            <p>
              Build your real estate portfolio with Orlando's best investment opportunities. We
              specialize in identifying properties with strong rental potential and appreciation.
            </p>
            <ul>
              <li>Investment property analysis</li>
              <li>ROI calculations and projections</li>
              <li>Rental market insights</li>
              <li>Property management referrals</li>
              <li>Portfolio building strategies</li>
            </ul>
            <Link to="/contact" className="service-cta">
              Explore Investment Opportunities
            </Link>
          </div>

          <div className="service-detail">
            <h2>Long-term Rentals</h2>
            <p>
              Find the perfect rental property for your needs. Whether you're relocating or looking
              for a long-term home, we'll help you find the right fit.
            </p>
            <ul>
              <li>Rental property search</li>
              <li>Application assistance</li>
              <li>Lease negotiation</li>
              <li>Neighborhood insights</li>
              <li>Relocation support</li>
            </ul>
            <Link to="/contact" className="service-cta">
              Find Your Rental
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

