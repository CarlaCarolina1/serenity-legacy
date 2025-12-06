import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { siteContent } from '../data/siteContent'
import SEO from '../components/SEO'
import { getLocalBusinessSchema, getWebsiteSchema } from '../utils/schema'
import NewConstruction from '../components/NewConstruction/NewConstruction'
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties'
import AgentProfile from '../components/AgentProfile/AgentProfile'
import Testimonials from '../components/Testimonials/Testimonials'
import MarketInsights from '../components/MarketInsights/MarketInsights'
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
        description="Find your dream home in Central Florida. Expert real estate services in Orlando, Clermont, Reunion Resort, and more."
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

      {/* 2. New Construction Focus */}
      <NewConstruction
        title={siteContent.home.newConstruction.title}
        subtitle={siteContent.home.newConstruction.subtitle}
        builders={siteContent.home.newConstruction.builders}
      />

      {/* 3. Featured Properties */}
      <FeaturedProperties
        title={siteContent.home.featuredProperties.title}
        subtitle={siteContent.home.featuredProperties.subtitle}
      />

      {/* 4. Agent Profile (Meet Carla) */}
      <AgentProfile
        title={siteContent.home.agentProfile.title}
        subtitle={siteContent.home.agentProfile.subtitle}
        bio={siteContent.home.agentProfile.bio}
        image={siteContent.home.agentProfile.image}
        differentiators={siteContent.home.agentProfile.differentiators}
      />

      {/* 5. Client Testimonials */}
      <Testimonials
        title={siteContent.home.testimonials.title}
        testimonials={siteContent.home.testimonials.items}
      />

      {/* 6. Market Insights */}
      <MarketInsights
        title={siteContent.home.marketInsights.title}
        subtitle={siteContent.home.marketInsights.subtitle}
        stats={siteContent.home.marketInsights.stats}
      />
    </div>
  )
}

export default Home
