import { Link } from 'react-router-dom'
import './PropertyCard.css'

interface PropertyCardProps {
  id: string
  image: string
  price: number
  beds: number
  baths: number
  sqft?: number
  neighborhood: string
  address: string
  status?: 'available' | 'under_contract' | 'sold' | 'off_market'
}

const PropertyCard = ({
  id,
  image,
  price,
  beds,
  baths,
  sqft,
  neighborhood,
  address,
  status = 'available',
}: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const statusLabels = {
    available: 'Available',
    under_contract: 'Under Contract',
    sold: 'Sold',
    off_market: 'Off Market',
  }

  const statusColors = {
    available: 'status-available',
    under_contract: 'status-contract',
    sold: 'status-sold',
    off_market: 'status-off-market',
  }

  return (
    <div className="property-card">
      <Link to={`/properties/${id}`} className="property-card-link">
        <div className="property-card-image-container">
          <img src={image} alt={address} className="property-card-image" />
          <div className={`property-status-badge ${statusColors[status]}`}>
            {statusLabels[status]}
          </div>
        </div>
        <div className="property-card-content">
          <div className="property-card-price">{formatPrice(price)}</div>
          <div className="property-card-address">{address}</div>
          <div className="property-card-neighborhood">{neighborhood}</div>
          <div className="property-card-details">
            <span className="property-detail">
              <strong>{beds}</strong> bed{beds !== 1 ? 's' : ''}
            </span>
            <span className="property-detail">
              <strong>{baths}</strong> bath{baths !== 1 ? 's' : ''}
            </span>
            {sqft && (
              <span className="property-detail">
                <strong>{sqft.toLocaleString()}</strong> sq ft
              </span>
            )}
          </div>
          <Link
            to={`/calculator?property=${id}`}
            className="property-card-calculate-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Calculate Payment
          </Link>
        </div>
      </Link>
    </div>
  )
}

export default PropertyCard

