import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { propertyApi, Property } from '../services/api'
import { getFallbackPropertyById } from '../data/properties'
import './PropertyDetail.css'

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) {
        setError('Property ID is required')
        setLoading(false)
        return
      }

      const propertyIdNumber = Number(id)

      if (Number.isNaN(propertyIdNumber)) {
        const fallbackProperty = getFallbackPropertyById(id)
        if (fallbackProperty) {
          setProperty(fallbackProperty)
          setError(null)
        } else {
          setError('Property not found')
        }
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const fetchedProperty = await propertyApi.getById(propertyIdNumber)
        setProperty(fetchedProperty)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch property:', err)
        const fallbackProperty = getFallbackPropertyById(id)
        if (fallbackProperty) {
          setProperty(fallbackProperty)
          setError(null)
        } else {
          setError('Property not found')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [id])

  if (loading) {
    return (
      <div className="property-detail-page">
        <div className="container">
          <div className="property-loading">
            <p>Loading property details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !property) {
    return (
      <div className="property-detail-page">
        <div className="container">
          <div className="property-not-found">
            <h2>Property Not Found</h2>
            <p>{error || "The property you're looking for doesn't exist."}</p>
            <Link to="/properties" className="cta-button">
              View All Properties
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Check out this property: ${property.address} - ${formatPrice(property.price)}`
    const encodedUrl = encodeURIComponent(url)
    const encodedText = encodeURIComponent(text)

    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case 'instagram':
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard! Paste it in Instagram.')
        return
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`
        break
      case 'email':
        shareUrl = `mailto:?subject=${encodedText}&body=${encodedText}%20${encodedUrl}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  const imageUrls = Array.isArray(property.image_urls)
    ? property.image_urls
    : typeof property.image_urls === 'string'
    ? JSON.parse(property.image_urls || '[]')
    : []

  const nextImage = () => {
    if (imageUrls.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length)
    }
  }

  const prevImage = () => {
    if (imageUrls.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length)
    }
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="property-detail-page">
      <section className="property-detail-hero">
        <div className="container">
          <Link to="/properties" className="back-link">
            ← Back to Properties
          </Link>
          <h1>{property.address}</h1>
          <p className="property-location">
            {property.city}, {property.state} {property.zip_code} • {property.neighborhood || 'Unknown'}
          </p>
        </div>
      </section>

      <section className="property-detail-content">
        <div className="container">
          <div className="property-detail-grid">
            {/* Image Gallery */}
            <div className="property-gallery">
              <div className="gallery-main">
                {imageUrls.length > 0 ? (
                  <>
                    <img
                      src={imageUrls[currentImageIndex]}
                      alt={`${property.address} - Real estate property for sale in ${property.neighborhood || 'Central Florida'} - Image ${currentImageIndex + 1}`}
                      className="gallery-main-image"
                    />
                    {imageUrls.length > 1 && (
                      <>
                        <button className="gallery-nav gallery-prev" onClick={prevImage} aria-label="Previous image">
                          ‹
                        </button>
                        <button className="gallery-nav gallery-next" onClick={nextImage} aria-label="Next image">
                          ›
                        </button>
                      </>
                    )}
                    <div className="gallery-counter">
                      {currentImageIndex + 1} / {imageUrls.length}
                    </div>
                  </>
                ) : (
                  <div className="gallery-placeholder">No images available</div>
                )}
              </div>
              {imageUrls.length > 1 && (
                <div className="gallery-thumbnails">
                  {imageUrls.map((image: string, index: number) => (
                    <button
                      key={index}
                      className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img src={image} alt={`${property.address} property thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="property-info">
              <div className="property-price">{formatPrice(property.price)}</div>
              <div className="property-details-grid">
                <div className="property-detail-item">
                  <strong>{property.bedrooms}</strong>
                  <span>Bedrooms</span>
                </div>
                <div className="property-detail-item">
                  <strong>{property.bathrooms}</strong>
                  <span>Bathrooms</span>
                </div>
                {property.square_feet && (
                  <div className="property-detail-item">
                    <strong>{property.square_feet.toLocaleString()}</strong>
                    <span>Sq Ft</span>
                  </div>
                )}
                {property.lot_size && (
                  <div className="property-detail-item">
                    <strong>{property.lot_size}</strong>
                    <span>Acres</span>
                  </div>
                )}
                {property.year_built && (
                  <div className="property-detail-item">
                    <strong>{property.year_built}</strong>
                    <span>Year Built</span>
                  </div>
                )}
              </div>

              <div className="property-actions">
                <Link
                  to={`/calculator?property=${property.id}`}
                  className="cta-button cta-button-large"
                >
                  Calculate My Ownership Costs
                </Link>
                <Link to="/contact" className="cta-button cta-button-secondary">
                  Schedule Tour
                </Link>
              </div>

              <div className="property-share">
                <h3>Share This Property</h3>
                <div className="share-buttons">
                  <button
                    className="share-btn share-facebook"
                    onClick={() => handleShare('facebook')}
                    aria-label="Share on Facebook"
                  >
                    Facebook
                  </button>
                  <button
                    className="share-btn share-instagram"
                    onClick={() => handleShare('instagram')}
                    aria-label="Share on Instagram"
                  >
                    Instagram
                  </button>
                  <button
                    className="share-btn share-whatsapp"
                    onClick={() => handleShare('whatsapp')}
                    aria-label="Share on WhatsApp"
                  >
                    WhatsApp
                  </button>
                  <button
                    className="share-btn share-email"
                    onClick={() => handleShare('email')}
                    aria-label="Share via Email"
                  >
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="property-description">
            <h2>About This Property</h2>
            <p>{property.description}</p>
          </div>

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <div className="property-features">
              <h2>Features</h2>
              <ul className="features-list">
                {(Array.isArray(property.features)
                  ? property.features
                  : typeof property.features === 'string'
                  ? JSON.parse(property.features || '[]')
                  : []
                ).map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default PropertyDetail
