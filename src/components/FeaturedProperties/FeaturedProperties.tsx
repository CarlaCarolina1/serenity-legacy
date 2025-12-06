import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { propertyApi, Property } from '../../services/api'
import { getFallbackProperties } from '../../data/properties'
import './FeaturedProperties.css'

interface FeaturedPropertiesProps {
  title: string
  subtitle: string
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ title, subtitle }) => {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await propertyApi.getAll()
        // Get first 4-5 properties
        setProperties(response.properties.slice(0, 5))
      } catch (err) {
        console.error('Failed to fetch properties:', err)
        const fallback = getFallbackProperties()
        setProperties(fallback.slice(0, 5))
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  if (loading) {
    return (
      <section className="featured-properties-section">
        <div className="container">
          <div className="featured-properties-header">
            <h2 className="featured-properties-title">{title}</h2>
            <p className="featured-properties-subtitle">{subtitle}</p>
          </div>
          <div className="loading-message">Loading properties...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="featured-properties-section">
      <div className="container">
        <div className="featured-properties-header">
          <h2 className="featured-properties-title">{title}</h2>
          <p className="featured-properties-subtitle">{subtitle}</p>
        </div>
        <div className="featured-properties-grid">
          {properties.map((property) => {
            const imageUrls = Array.isArray(property.image_urls)
              ? property.image_urls
              : typeof property.image_urls === 'string'
              ? JSON.parse(property.image_urls || '[]')
              : []
            
            const features = [
              property.bedrooms ? `${property.bedrooms} bed` : '',
              property.bathrooms ? `${property.bathrooms} bath` : '',
              property.square_feet ? `${property.square_feet.toLocaleString()} sq ft` : '',
              property.neighborhood || 'Central Florida',
            ].filter(Boolean)

            return (
              <Link
                key={property.id}
                to={`/properties/${property.id}`}
                className="featured-property-card"
              >
                <div className="featured-property-image">
                  <img
                    src={imageUrls[0] || '/images/placeholder.jpg'}
                    alt={`${property.address} - Real estate property`}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/images/placeholder.jpg'
                    }}
                  />
                </div>
                <div className="featured-property-content">
                  <div className="featured-property-price">{formatPrice(property.price)}</div>
                  <div className="featured-property-details">
                    {property.bedrooms && `${property.bedrooms} bed`}
                    {property.bedrooms && property.bathrooms && ' | '}
                    {property.bathrooms && `${property.bathrooms} bath`}
                    {property.square_feet && ` | ${property.square_feet.toLocaleString()} sq ft`}
                  </div>
                  <div className="featured-property-address">{property.address}</div>
                  <ul className="featured-property-features">
                    {features.slice(0, 4).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="featured-properties-cta">
          <Link to="/properties" className="cta-button">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties

