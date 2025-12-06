import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { siteContent } from '../data/siteContent'
import SEO from '../components/SEO'
import { getLocalBusinessSchema, getWebsiteSchema } from '../utils/schema'
import NewConstruction from '../components/NewConstruction/NewConstruction'
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties'
import DesignInspiration from '../components/DesignInspiration/DesignInspiration'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import Communities from '../components/Communities/Communities'
import AgentProfile from '../components/AgentProfile/AgentProfile'
import Testimonials from '../components/Testimonials/Testimonials'
import MarketInsights from '../components/MarketInsights/MarketInsights'
import FooterCta from '../components/FooterCta/FooterCta'
import './Home.css'

const Home = () => {
  // Array of luxury home images - high-resolution, magazine-quality
  const luxuryHomes = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2031&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  ]

  // Pre-load images to prevent gray flashes
  useEffect(() => {
    luxuryHomes.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % luxuryHomes.length)
    }, 7000) // Change image every 7 seconds

    return () => clearInterval(interval)
  }, [luxuryHomes.length])

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getWebsiteSchema()
    ]
  }

  return (
    <div className="home">
      <SEO
        title="Discover Your Dream Home in Central Florida"
        description="Experience exceptional living in Orlando's most desirable communities. From elegant new construction to prestigious resale properties, find your perfect home with expert guidance and personalized service."
        keywords="real estate, buying properties, selling properties, land, customizable homes, new residential, commercial real estate, Orlando real estate, Central Florida real estate, homes for sale, property investment, land for sale, new homes, customizable properties"
        url="https://serenitylegacy.net"
        schema={homeSchema}
      />
      
      {/* 1. Hero Section */}
      <section 
        className="home-hero"
        style={{
          backgroundImage: `url(${luxuryHomes[currentImageIndex]})`
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{siteContent.home.hero.title}</h1>
            <p className="hero-subtitle">
              {siteContent.home.hero.subtitle}
            </p>
            <div className="hero-cta">
              <Link to="/properties" className="cta-button cta-button-large">
                {siteContent.home.hero.ctaPrimary}
              </Link>
              <Link to="/contact" className="cta-button cta-button-secondary">
                {siteContent.home.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Premium New Construction Communities */}
      <NewConstruction
        title={siteContent.home.newConstruction.title}
        subtitle={siteContent.home.newConstruction.subtitle}
        builders={siteContent.home.newConstruction.builders}
        closingText={siteContent.home.newConstruction.closingText}
      />

      {/* 3. Featured Properties Represented by Carla */}
      <FeaturedProperties
        title={siteContent.home.featuredProperties.title}
        subtitle={siteContent.home.featuredProperties.subtitle}
        properties={siteContent.home.featuredProperties.properties}
        closingText={siteContent.home.featuredProperties.closingText}
        ctaPrimary={siteContent.home.featuredProperties.ctaPrimary}
        ctaSecondary={siteContent.home.featuredProperties.ctaSecondary}
      />

      {/* 4. Stunning Homes & Design Inspiration */}
      <DesignInspiration
        title={siteContent.home.designInspiration.title}
        subtitle={siteContent.home.designInspiration.subtitle}
        description={siteContent.home.designInspiration.description}
        ctaText={siteContent.home.designInspiration.ctaText}
      />

      {/* 5. Why Choose Central Florida? */}
      <WhyChoose
        title={siteContent.home.whyChoose.title}
        subtitle={siteContent.home.whyChoose.subtitle}
        description={siteContent.home.whyChoose.description}
        description2={siteContent.home.whyChoose.description2}
        features={siteContent.home.whyChoose.features}
        closingText={siteContent.home.whyChoose.closingText}
      />

      {/* 6. Communities I Serve with Pride */}
      <Communities
        title={siteContent.home.communities.title}
        subtitle={siteContent.home.communities.subtitle}
        items={siteContent.home.communities.items}
        closingText={siteContent.home.communities.closingText}
      />

      {/* 7. Meet Carla: Your Trusted Real Estate Partner */}
      <AgentProfile
        title={siteContent.home.agentProfile.title}
        subtitle={siteContent.home.agentProfile.subtitle}
        bio={siteContent.home.agentProfile.bio}
        bio2={siteContent.home.agentProfile.bio2}
        differentiators={siteContent.home.agentProfile.differentiators}
        closingText={siteContent.home.agentProfile.closingText}
      />

      {/* 8. What My Clients Are Saying */}
      <Testimonials
        title={siteContent.home.testimonials.title}
        subtitle={siteContent.home.testimonials.subtitle}
        testimonials={siteContent.home.testimonials.items}
        closingText={siteContent.home.testimonials.closingText}
      />

      {/* 9. Understanding the Central Florida Market */}
      <MarketInsights
        title={siteContent.home.marketInsights.title}
        subtitle={siteContent.home.marketInsights.subtitle}
        description={siteContent.home.marketInsights.description}
        description2={siteContent.home.marketInsights.description2}
        stats={siteContent.home.marketInsights.stats}
        closingText={siteContent.home.marketInsights.closingText}
      />

      {/* 10. Ready to Begin Your Journey? */}
      <FooterCta
        title={siteContent.home.footerCta.title}
        subtitle={siteContent.home.footerCta.subtitle}
        actions={siteContent.home.footerCta.actions}
        contactInfo={siteContent.home.footerCta.contactInfo}
        closingText={siteContent.home.footerCta.closingText}
        ctaPrimary={siteContent.home.footerCta.ctaPrimary}
        ctaSecondary={siteContent.home.footerCta.ctaSecondary}
      />
    </div>
  )
}

export default Home
