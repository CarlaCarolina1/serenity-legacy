import React from 'react'
import './Communities.css'

interface Community {
  name: string
  description: string
}

interface CommunitiesProps {
  title: string
  subtitle: string
  items: Community[]
  closingText: string
}

const Communities: React.FC<CommunitiesProps> = ({ title, subtitle, items, closingText }) => {
  return (
    <section className="communities-section">
      <div className="container">
        <div className="communities-header">
          <h2 className="communities-title">{title}</h2>
          <p className="communities-subtitle">{subtitle}</p>
        </div>
        <div className="communities-grid">
          {items.map((community, index) => (
            <div key={index} className="community-card">
              <h3 className="community-name">{community.name}</h3>
              <p className="community-description">{community.description}</p>
            </div>
          ))}
        </div>
        <p className="communities-closing">{closingText}</p>
      </div>
    </section>
  )
}

export default Communities

