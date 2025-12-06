import React from 'react'
import './NewConstruction.css'

interface Builder {
  name: string
  description: string
  logo?: string
}

interface NewConstructionProps {
  title: string
  subtitle: string
  builders: Builder[]
}

const NewConstruction: React.FC<NewConstructionProps> = ({ title, subtitle, builders }) => {
  return (
    <section className="new-construction-section">
      <div className="container">
        <div className="new-construction-header">
          <h2 className="new-construction-title">{title}</h2>
          <p className="new-construction-subtitle">{subtitle}</p>
        </div>
        <div className="builders-grid">
          {builders.map((builder, index) => (
            <div key={index} className="builder-card">
              {builder.logo ? (
                <div className="builder-logo">
                  <img src={builder.logo} alt={`${builder.name} logo`} onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }} />
                </div>
              ) : (
                <div className="builder-logo-placeholder">
                  <span>{builder.name}</span>
                </div>
              )}
              <h3 className="builder-name">{builder.name}</h3>
              <p className="builder-description">{builder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewConstruction

