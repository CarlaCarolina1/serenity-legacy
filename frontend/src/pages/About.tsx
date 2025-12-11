import { siteContent } from '../data/siteContent'
import SEO from '../components/SEO'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title="About Carla - Expert Real Estate Agent in Central Florida"
        description="Meet Carla, your trusted real estate partner specializing in buying properties, selling properties, land sales, new residential homes, commercial real estate, and customizable homes in Orlando and Central Florida."
        keywords="real estate agent, Orlando realtor, Central Florida real estate, buying properties, selling properties, land sales, property expert, real estate consultant"
        url="https://serenitylegacy.net/about"
      />

      {/* Hero Section with Image */}
      <section className="about-hero-modern">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="about-profile-section">
            <div className="about-profile-image-wrapper">
              <img
                src="/images/CarlaProfilefull.jpeg"
                alt="Carla - Real Estate Professional"
                className="about-profile-image"
                onError={(e) => {
                  // Fallback to a professional placeholder if image not found
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop'
                }}
              />
              <div className="about-profile-badge">
                <span className="badge-icon">⭐</span>
                <span className="badge-text">10+ Years Experience</span>
              </div>
            </div>
            <div className="about-profile-info">
              <h1>{siteContent.about.title}</h1>
              <p className="about-tagline">{siteContent.about.subtitle}</p>
              <div className="about-credentials">
                <div className="credential-item">
                  <span className="credential-icon">🏆</span>
                  <span>Licensed Realtor</span>
                </div>
                <div className="credential-item">
                  <span className="credential-icon">📍</span>
                  <span>Central Florida Expert</span>
                </div>
                <div className="credential-item">
                  <span className="credential-icon">💼</span>
                  <span>500+ Homes Sold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="section-title">{siteContent.about.experience.title}</h2>
              <p className="story-text">
                {siteContent.about.experience.description}
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Properties Sold</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="about-areas">
        <div className="container">
          <h2 className="section-title-center">{siteContent.about.areas.title}</h2>
          <div className="areas-grid-images">
            {[
              { name: 'Reunion Resort', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80' }, // Resort/golf vibe
              { name: 'Margaritaville', image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=1200&q=80' }, // Margaritaville Resort Orlando-style pool
              { name: 'Champions Gate', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80' }, // Golf/greens feel
              { name: 'Clermont', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80' }, // Lakes/pier
              { name: 'Orlando', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80' }, // City/professional
              { name: 'Orlando Downtown', image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80' }, // Downtown skyline
              { name: 'Titusville', image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=1200&q=80' }, // Space Coast / rocket feel
              { name: 'Kissimmee', image: 'https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=1200&q=80' }, // Disney area for Kissimmee
            ].map((area, index) => (
              <div key={index} className="area-image-card">
                <div
                  className="area-image"
                  style={{ backgroundImage: `url(${area.image})` }}
                >
                  <div className="area-overlay"></div>
                  <div className="area-name-overlay">{area.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="about-why-choose">
        <div className="container">
          <h2 className="section-title-center">{siteContent.about.whyChoose.title}</h2>
          <div className="why-choose-grid">
            {siteContent.about.whyChoose.items.map((item, index) => {
              const images = [
                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80', // Local Market Expertise (city/skyline)
                'https://images.unsplash.com/photo-1521790361543-f6429e9c7d86?auto=format&fit=crop&w=1200&q=80', // Personalized Service (handshake/consultation)
                'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80', // Transparent Communication (team/collaboration)
                'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80', // Proven Track Record (success/achievement)
                'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80', // Extra if needed
              ]
              return (
                <div
                  key={index}
                  className="why-choose-card"
                  style={{ backgroundImage: `url(${images[index] || images[images.length - 1]})` }}
                >
                  <div className="why-choose-overlay"></div>
                  <div className="why-choose-content">
                    <div className="why-choose-icon">✨</div>
                    <div className="why-choose-text">{item}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content-box">
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Let's work together to make your real estate goals a reality.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get in Touch</a>
              <a href="/properties" className="cta-button cta-button-secondary">View Properties</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
