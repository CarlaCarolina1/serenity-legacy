import React from 'react'
import { Link } from 'react-router-dom'
import './DesignInspiration.css'

interface DesignInspirationProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
}

const inspirationImages = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
]

const DesignInspiration: React.FC<DesignInspirationProps> = ({ title, subtitle, description, ctaText }) => {
  return (
    <section className="design-inspiration-section">
      <div className="design-inspiration-header">
        <h2 className="design-inspiration-title">{title}</h2>
        <p className="design-inspiration-subtitle">{subtitle}</p>
      </div>
      <div className="inspiration-gallery">
        {inspirationImages.map((img, index) => (
          <div key={index} className="inspiration-image">
            <img src={img} alt={`Luxury home design inspiration ${index + 1}`} />
          </div>
        ))}
      </div>
      <p className="design-inspiration-description">{description}</p>
      <div className="design-inspiration-cta">
        <Link to="/contact" className="cta-button">{ctaText}</Link>
      </div>
    </section>
  )
}

export default DesignInspiration
