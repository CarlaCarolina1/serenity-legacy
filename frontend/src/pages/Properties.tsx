import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { propertyApi, Property } from '../services/api'
import { getFallbackProperties } from '../data/properties'
import SEO from '../components/SEO'
import './Properties.css'

// Property-type categories for the filter bar. Ready for the New Construction /
// builder-permitted listings source — see ROADMAP.md.
const CATEGORIES = ['All', 'New Construction', 'Residential', 'Land', 'Commercial'] as const
type Category = (typeof CATEGORIES)[number]

const matchesCategory = (propertyType: string | null | undefined, category: Category): boolean => {
  if (category === 'All') return true
  const t = (propertyType || '').toLowerCase()
  if (category === 'Residential') {
    return ['house', 'condo', 'townhouse', 'apartment', 'residential', 'single', 'villa'].some((k) =>
      t.includes(k)
    )
  }
  if (category === 'New Construction') return t.includes('new') || t.includes('construction')
  if (category === 'Land') return t.includes('land') || t.includes('lot')
  if (category === 'Commercial') return t.includes('commercial')
  return true
}

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'gallery'>('grid')
  const [typeFilter, setTypeFilter] = useState<Category>('All')
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

  const visibleProperties = properties.filter((property) =>
    matchesCategory(property.property_type, typeFilter)
  )

  return (
    <div className="properties-page">
      <SEO
        title="Properties for Sale - Real Estate Listings in Central Florida"
        description="Browse homes for sale, land for sale, new residential properties, commercial real estate, and customizable homes in Orlando, Clermont, and Central Florida. Find your perfect property today."
        keywords="properties for sale, homes for sale, land for sale, real estate listings, new residential homes, commercial real estate, customizable homes, Orlando properties, Central Florida real estate, property search"
        url="https://serenitylegacy.net/properties"
      />
      <section className="properties-hero">
        <div className="container">
          <h1>Available Properties</h1>
          <p className="properties-subtitle">Find your perfect home in Central Florida</p>
        </div>
      </section>

      {/* IDX Integration - Live MLS Listings */}
      <section className="idx-integration-section">
        <div className="container">
          <div className="idx-header">
            <h2>Search All MLS Listings</h2>
            <p className="idx-subtitle">Browse real-time property listings from across Central Florida</p>
          </div>
          <div className="idx-iframe-container">
            <iframe
              src="https://carlayacaman.myrealtyrealestate.com/wide.php"
              allowTransparency={true}
              frameBorder="0"
              className="idx-iframe"
              title="MLS Property Search"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="properties-content">
        <div className="container">
          <div className="properties-header">
            <h2>Featured Listings</h2>
          </div>

          <div className="type-filter" role="tablist" aria-label="Filter properties by type">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={typeFilter === cat}
                className={`type-filter-btn ${typeFilter === cat ? 'active' : ''}`}
                onClick={() => setTypeFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && (
            <div className="properties-loading">
              <p>Loading properties...</p>
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
                  {visibleProperties.map((property) => {
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
                              src={imageUrls[0] || 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'}
                            alt={`${property.address} - Real estate property for sale in ${property.neighborhood || 'Central Florida'}`}
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                                target.src = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
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
                  {visibleProperties.map((property) => {
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
                        image={imageUrls[0] || 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'}
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

              {visibleProperties.length === 0 && (
                <div className="no-properties">
                  <p>
                    {typeFilter === 'All'
                      ? 'No properties found. Check back soon for new listings!'
                      : `No ${typeFilter} listings right now. Try another category or check back soon!`}
                  </p>
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
