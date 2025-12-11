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

// Property images - using high-quality home images
const getPropertyImage = (index: number) => {
  const images = [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop', // Champions Gate luxury home
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop', // Reunion Resort contemporary
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', // Windsor villa
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop', // Kissimmee lakefront
  ]
  return images[index] || images[0]
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
      <div className="featured-properties-header">
        <h2 className="featured-properties-title">{title}</h2>
        <p className="featured-properties-subtitle">{subtitle}</p>
      </div>
      <div className="featured-properties-grid">
        {properties.map((property, index) => (
          <div key={index} className="featured-property-card">
            <div className="featured-property-image-wrapper">
              <img
                src={getPropertyImage(index)}
                alt={`${property.sqft} Estate in ${property.location}`}
                className="featured-property-image"
              />
              <div className="featured-property-price-tag">{property.price}</div>
            </div>
            <div className="featured-property-content">
              <div className="featured-property-header">
                <h3 className="featured-property-sqft">{property.sqft} Estate in {property.location}</h3>
              </div>
              <p className="featured-property-details">{property.beds} bed · {property.baths} bath</p>
              <p className="featured-property-description">{property.description}</p>
              <ul className="featured-property-features">
                {property.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="featured-properties-closing">{closingText}</p>
      <div className="featured-properties-cta">
        <Link to="/contact" className="cta-button">{ctaPrimary}</Link>
        <Link to="/properties" className="cta-button cta-button-secondary">{ctaSecondary}</Link>
      </div>
    </section>
  )
}

export default FeaturedProperties
