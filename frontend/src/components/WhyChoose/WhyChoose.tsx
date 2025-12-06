import React from 'react'
import './WhyChoose.css'

interface Feature {
  title: string
  description: string
  icon: string
}

interface WhyChooseProps {
  title: string
  subtitle: string
  description: string
  description2: string
  features: Feature[]
  closingText: string
}

const WhyChoose: React.FC<WhyChooseProps> = ({ 
  title, 
  subtitle, 
  description, 
  description2,
  features, 
  closingText 
}) => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-header">
        <h2 className="why-choose-title">{title}</h2>
      </div>
      
      <div className="why-choose-main">
        <div className="why-choose-image">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury home in Central Florida"
          />
        </div>
        <div className="why-choose-content">
          <h3 className="why-choose-subtitle">{subtitle}</h3>
          <p className="why-choose-description">{description}</p>
          <p className="why-choose-description">{description2}</p>
        </div>
      </div>

      <div className="why-choose-features">
        {features.map((feature, index) => (
          <div key={index} className="why-choose-feature">
            <div className="why-choose-icon">{feature.icon}</div>
            <div className="why-choose-feature-content">
              <h4 className="why-choose-feature-title">{feature.title}</h4>
              <p className="why-choose-feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="why-choose-closing">{closingText}</p>
    </section>
  )
}

export default WhyChoose
