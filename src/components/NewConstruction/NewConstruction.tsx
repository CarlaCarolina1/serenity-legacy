import React from 'react'
import './NewConstruction.css'

interface Builder {
  name: string
  description: string
}

interface NewConstructionProps {
  title: string
  subtitle: string
  builders: Builder[]
  closingText: string
}

const NewConstruction: React.FC<NewConstructionProps> = ({ title, subtitle, builders, closingText }) => {
  return (
    <section className="new-construction-section">
      <div className="new-construction-header">
        <h2 className="new-construction-title">{title}</h2>
        <p className="new-construction-subtitle">{subtitle}</p>
      </div>
      <div className="builders-grid">
        {builders.map((builder, index) => (
          <div key={index} className="builder-card">
            <h3 className="builder-name">{builder.name}</h3>
            <p className="builder-description">{builder.description}</p>
          </div>
        ))}
      </div>
      <p className="new-construction-closing">{closingText}</p>
    </section>
  )
}

export default NewConstruction
