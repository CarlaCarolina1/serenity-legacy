import React from 'react'
import './MarketInsights.css'

interface MarketStat {
  label: string
  value: string
  change: string
  period: string
}

interface MarketInsightsProps {
  title: string
  subtitle: string
  stats: MarketStat[]
}

const MarketInsights: React.FC<MarketInsightsProps> = ({ title, subtitle, stats }) => {
  return (
    <section className="market-insights-section">
      <div className="container">
        <div className="market-insights-header">
          <h2 className="market-insights-title">{title}</h2>
          <p className="market-insights-subtitle">{subtitle}</p>
        </div>
        <div className="market-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="market-stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-change">
                <span className="stat-change-value">{stat.change}</span>
                <span className="stat-change-period">{stat.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketInsights

