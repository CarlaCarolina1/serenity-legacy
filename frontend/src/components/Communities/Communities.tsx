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

// Community images - using placeholder service for now
const getCommunityImage = (index: number) => {
  const images = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop', // Davenport/Champions Gate
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop', // Kissimmee/Celebration
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&h=300&fit=crop', // Orlando/Winter Park
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop', // Groveland/Minneola
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop', // Apopka
  ]
  return images[index] || images[0]
}

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
            <div className="community-image-wrapper">
              <img
                src={getCommunityImage(index)}
                alt={community.name}
                className="community-image"
              />
              <div className="community-overlay"></div>
            </div>
            <div className="community-content">
              <h3 className="community-name">{community.name}</h3>
              <p className="community-description">{community.description}</p>
            </div>
          </div>
        ))}
      </div>

      {bottomItems.length > 0 && (
        <div className="communities-grid-bottom">
          {bottomItems.map((community, index) => (
            <div key={index + 3} className="community-card">
              <div className="community-image-wrapper">
                <img
                  src={getCommunityImage(index + 3)}
                  alt={community.name}
                  className="community-image"
                />
                <div className="community-overlay"></div>
              </div>
              <div className="community-content">
                <h3 className="community-name">{community.name}</h3>
                <p className="community-description">{community.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="communities-closing">{closingText}</p>
    </section>
  )
}

export default Communities
