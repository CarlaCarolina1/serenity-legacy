import React from 'react'
import { Link } from 'react-router-dom'
import './DesignInspiration.css'

interface DesignInspirationProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
}

const DesignInspiration: React.FC<DesignInspirationProps> = ({ 
  title, 
  subtitle, 
  description, 
  ctaText 
}) => {
  const inspirationImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2031&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dbe4eb5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
  ]

  return (
    <section className="design-inspiration-section">
      <div className="container">
        <div className="design-inspiration-header">
          <h2 className="design-inspiration-title">{title}</h2>
          <p className="design-inspiration-subtitle">{subtitle}</p>
        </div>
        <div className="inspiration-gallery">
          {inspirationImages.map((image, index) => (
            <div key={index} className="inspiration-image">
              <img src={image} alt={`Luxury home design inspiration ${index + 1}`} />
            </div>
          ))}
        </div>
        <p className="design-inspiration-description">{description}</p>
        <div className="design-inspiration-cta">
          <Link to="/contact" className="cta-button">{ctaText}</Link>
        </div>
      </div>
    </section>
  )
}

export default DesignInspiration

