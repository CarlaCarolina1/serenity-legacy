import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { propertyApi, Property } from '../services/api'
import { getFallbackProperties } from '../data/properties'
import './Properties.css'

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'gallery'>('gallery')
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true)
        const response = await propertyApi.getAll()
        setProperties(response.properties)
        setError(null)
        setStatusMessage(null)
      } catch (err) {
        console.error('Failed to fetch properties:', err)
        const fallback = getFallbackProperties()
        if (fallback.length > 0) {
          setProperties(fallback)
          setStatusMessage('Showing sample data while the live API is unavailable.')
          setError(null)
        } else {
          setError('Failed to load properties. Please try again later.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  return (
    <div className="properties-page">
      <section className="properties-hero">
        <div className="container">
          <h1>Available Properties</h1>
          <p className="properties-subtitle">Find your perfect home in Central Florida</p>
        </div>
      </section>

      <section className="properties-content">
        <div className="container">
          <div className="properties-header">
            <h2>Featured Listings</h2>
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'gallery' ? 'active' : ''}`}
                onClick={() => setViewMode('gallery')}
                aria-label="Gallery view"
              >
                Gallery
              </button>
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                Grid
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                List
              </button>
            </div>
          </div>

          {loading && (
            <div className="properties-loading">
              <p>Loading properties...</p>
            </div>
          )}

          {statusMessage && (
            <div className="properties-notice">
              <p>{statusMessage}</p>
            </div>
          )}

          {error && (
            <div className="properties-error">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              {viewMode === 'gallery' ? (
                <div className="properties-gallery">
                  {properties.map((property) => {
                    const imageUrls = Array.isArray(property.image_urls)
                      ? property.image_urls
                      : typeof property.image_urls === 'string'
                      ? JSON.parse(property.image_urls || '[]')
                      : []
                    const formatPrice = (price: number) => {
                      return new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                      }).format(price)
                    }
                    return (
                      <Link
                        key={property.id}
                        to={`/properties/${property.id}`}
                        className="property-gallery-card"
                      >
                        <div className="property-gallery-image-container">
                          <img
                            src={imageUrls[0] || '/images/placeholder.jpg'}
                            alt={property.address}
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/images/placeholder.jpg'
                            }}
                          />
                          <div className="property-gallery-overlay">
                            <div className="property-gallery-content">
                              <h3>{property.address}</h3>
                              <p className="property-gallery-location">
                                {property.city}, {property.state} {property.zip_code}
                              </p>
                              <p className="property-gallery-price">{formatPrice(property.price)}</p>
                              <div className="property-gallery-details">
                                <span>{property.bedrooms} Beds</span>
                                <span>{property.bathrooms} Baths</span>
                                {property.square_feet && <span>{property.square_feet.toLocaleString()} Sq Ft</span>}
                              </div>
                              <div className="property-gallery-cta">View Interior →</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              ) : (
                <div className={`properties-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                  {properties.map((property) => {
                    const imageUrls = Array.isArray(property.image_urls)
                      ? property.image_urls
                      : typeof property.image_urls === 'string'
                      ? JSON.parse(property.image_urls || '[]')
                      : []
                    const statusMap: Record<string, 'available' | 'under_contract' | 'sold' | 'off_market'> = {
                      Available: 'available',
                      'Under Contract': 'under_contract',
                      Sold: 'sold',
                      'Off Market': 'off_market',
                    }
                    return (
                      <PropertyCard
                        key={property.id}
                        id={property.id.toString()}
                        image={imageUrls[0] || '/images/placeholder.jpg'}
                        price={property.price}
                        beds={property.bedrooms}
                        baths={property.bathrooms}
                        sqft={property.square_feet || undefined}
                        neighborhood={property.neighborhood || 'Unknown'}
                        address={property.address}
                        status={statusMap[property.status] || 'available'}
                      />
                    )
                  })}
                </div>
              )}

              {properties.length === 0 && (
                <div className="no-properties">
                  <p>No properties found. Check back soon for new listings!</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Properties

