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
      <section className="about-hero">
        <div className="container">
          <h1>{siteContent.about.title}</h1>
          <p className="about-subtitle">{siteContent.about.subtitle}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>{siteContent.about.experience.title}</h2>
            <p>
              {siteContent.about.experience.description}
            </p>
          </div>

          <div className="about-section">
            <h2>{siteContent.about.areas.title}</h2>
            <div className="areas-grid">
              {siteContent.about.areas.items.map((area, index) => (
                <div key={index} className="area-item">{area}</div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>{siteContent.about.whyChoose.title}</h2>
            <ul className="about-list">
              {siteContent.about.whyChoose.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

