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

const communityIcons = ['🏠', '🌊', '🏙️', '🌳', '🏡']

const Communities: React.FC<CommunitiesProps> = ({ title, subtitle, items, closingText }) => {
  const topItems = items.slice(0, 3)
  const bottomItems = items.slice(3)

  return (
    <section className="communities-section">
      <div className="communities-header">
        <h2 className="communities-title">{title}</h2>
        <p className="communities-subtitle">{subtitle}</p>
      </div>
      
      <div className="communities-grid">
        {topItems.map((community, index) => (
          <div key={index} className="community-card">
            <div className="community-icon">{communityIcons[index] || '🏠'}</div>
            <h3 className="community-name">{community.name}</h3>
            <p className="community-description">{community.description}</p>
          </div>
        ))}
      </div>

      {bottomItems.length > 0 && (
        <div className="communities-grid-bottom">
          {bottomItems.map((community, index) => (
            <div key={index + 3} className="community-card">
              <div className="community-icon">{communityIcons[index + 3] || '🏠'}</div>
              <h3 className="community-name">{community.name}</h3>
              <p className="community-description">{community.description}</p>
            </div>
          ))}
        </div>
      )}

      <p className="communities-closing">{closingText}</p>
    </section>
  )
}

export default Communities
