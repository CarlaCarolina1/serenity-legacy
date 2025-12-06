import React from 'react'
import { Link } from 'react-router-dom'
import './AgentProfile.css'

interface Differentiator {
  title: string
  description: string
  icon: string
}

interface AgentProfileProps {
  title: string
  subtitle: string
  bio: string
  image?: string
  differentiators: Differentiator[]
}

const AgentProfile: React.FC<AgentProfileProps> = ({ 
  title, 
  subtitle, 
  bio, 
  image, 
  differentiators 
}) => {
  return (
    <section className="agent-profile-section">
      <div className="container">
        <div className="agent-profile-content">
          <div className="agent-profile-image">
            {image ? (
              <img src={image} alt="Carla Carolina - Real Estate Agent" />
            ) : (
              <div className="agent-profile-placeholder">
                <span>Professional Photo</span>
              </div>
            )}
          </div>
          <div className="agent-profile-text">
            <h2 className="agent-profile-title">{title}</h2>
            <p className="agent-profile-subtitle">{subtitle}</p>
            <p className="agent-profile-bio">{bio}</p>
            <div className="agent-differentiators">
              {differentiators.map((item, index) => (
                <div key={index} className="differentiator-item">
                  <div className="differentiator-icon">{item.icon}</div>
                  <div className="differentiator-content">
                    <h3 className="differentiator-title">{item.title}</h3>
                    <p className="differentiator-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="cta-button">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentProfile

