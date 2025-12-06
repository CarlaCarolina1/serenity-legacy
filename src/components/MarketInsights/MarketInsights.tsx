import React from 'react'
import './MarketInsights.css'

interface MarketStat {
  label: string
  value: string
  description: string
}

interface MarketInsightsProps {
  title: string
  subtitle: string
  description: string
  description2: string
  stats: MarketStat[]
  closingText: string
}

const MarketInsights: React.FC<MarketInsightsProps> = ({ 
  title, 
  subtitle, 
  description,
  description2,
  stats, 
  closingText 
}) => {
  return (
    <section className="market-insights-section">
      <div className="container">
        <div className="market-insights-header">
          <h2 className="market-insights-title">{title}</h2>
          <h3 className="market-insights-subtitle">{subtitle}</h3>
        </div>
        <div className="market-insights-content">
          <p className="market-insights-description">{description}</p>
          <p className="market-insights-description">{description2}</p>
        </div>
        <div className="market-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="market-stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
        <p className="market-insights-closing">{closingText}</p>
      </div>
    </section>
  )
}

export default MarketInsights

