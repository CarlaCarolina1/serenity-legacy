import React from 'react'
import { Link } from 'react-router-dom'
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
      <div className="container">
        <div className="agent-profile-header">
          <h2 className="agent-profile-title">{title}</h2>
          <p className="agent-profile-subtitle">{subtitle}</p>
        </div>
        <div className="agent-profile-content">
          <div className="agent-profile-text">
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
            <p className="agent-profile-closing">{closingText}</p>
            <Link to="/contact" className="cta-button">Schedule Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentProfile

