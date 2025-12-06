import React from 'react'
import './AgentProfile.css'

interface Differentiator {
  title: string
  description: string
}

interface AgentProfileProps {
  title: string
  subtitle: string
  bio: string
  bio2: string
  differentiators: Differentiator[]
  closingText: string
}

const AgentProfile: React.FC<AgentProfileProps> = ({ 
  title, 
  subtitle, 
  bio, 
  bio2,
  differentiators,
  closingText
}) => {
  return (
    <section className="agent-profile-section">
      <div className="agent-profile-header">
        <h2 className="agent-profile-title">{title}</h2>
        <p className="agent-profile-subtitle">{subtitle}</p>
      </div>

      <div className="agent-profile-main">
        <div className="agent-profile-image">
          <img 
            src="/images/CarlaProfilefull.jpeg" 
            alt="Carla Carolina - Licensed Realtor in Orlando, Florida"
          />
        </div>
        <div className="agent-profile-content">
          <p className="agent-profile-bio">{bio}</p>
          <p className="agent-profile-bio">{bio2}</p>
          <div className="agent-differentiators">
            {differentiators.map((item, index) => (
              <div key={index} className="differentiator-item">
                <h4 className="differentiator-title">{item.title}</h4>
                <p className="differentiator-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="agent-profile-closing">{closingText}</p>
    </section>
  )
}

export default AgentProfile
