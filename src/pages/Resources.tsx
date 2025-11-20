import './Resources.css'

const Resources = () => {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="container">
          <h1>Resources</h1>
          <p className="resources-subtitle">Helpful information for your real estate journey</p>
        </div>
      </section>

      <section className="resources-content">
        <div className="container">
          <div className="resource-section">
            <span className="resource-icon">📊</span>
            <h2>Market Reports</h2>
            <p>Stay informed about the Central Florida real estate market with our latest reports and insights.</p>
            <p className="coming-soon">Coming Soon</p>
          </div>

          <div className="resource-section">
            <span className="resource-icon">🗺️</span>
            <h2>Neighborhood Guides</h2>
            <p>Learn about the different neighborhoods in Central Florida and find the perfect area for you.</p>
            <p className="coming-soon">Coming Soon</p>
          </div>

          <div className="resource-section">
            <span className="resource-icon">🎓</span>
            <h2>School Information</h2>
            <p>Find information about schools in the areas you're considering.</p>
            <p className="coming-soon">Coming Soon</p>
          </div>

          <div className="resource-section">
            <span className="resource-icon">🏘️</span>
            <h2>HOA Information</h2>
            <p>Understand HOA fees, rules, and amenities for properties in managed communities.</p>
            <p className="coming-soon">Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources

