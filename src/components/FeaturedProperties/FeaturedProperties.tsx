import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedProperties.css'

interface Property {
  sqft: string
  location: string
  price: string
  beds: number
  baths: number
  description: string
  features: string[]
}

interface FeaturedPropertiesProps {
  title: string
  subtitle: string
  properties: Property[]
  closingText: string
  ctaPrimary: string
  ctaSecondary: string
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ 
  title, 
  subtitle, 
  properties, 
  closingText,
  ctaPrimary,
  ctaSecondary
}) => {
  return (
    <section className="featured-properties-section">
      <div className="container">
        <div className="featured-properties-header">
          <h2 className="featured-properties-title">{title}</h2>
          <p className="featured-properties-subtitle">{subtitle}</p>
        </div>
        <div className="featured-properties-grid">
          {properties.map((property, index) => (
            <div key={index} className="featured-property-card">
              <div className="featured-property-header">
                <div className="featured-property-sqft">{property.sqft}</div>
                <div className="featured-property-location">Estate in {property.location}</div>
              </div>
              <div className="featured-property-price">{property.price}</div>
              <div className="featured-property-details">
                {property.beds} bed, {property.baths} bath
              </div>
              <p className="featured-property-description">{property.description}</p>
              <ul className="featured-property-features">
                {property.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="featured-properties-closing">{closingText}</p>
        <div className="featured-properties-cta">
          <Link to="/contact" className="cta-button">{ctaPrimary}</Link>
          <Link to="/properties" className="cta-button cta-button-secondary">{ctaSecondary}</Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties

