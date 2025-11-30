import { useParams, Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { siteContent } from '../../data/siteContent'
import './NeighborhoodPage.css'

interface NeighborhoodData {
  name: string
  slug: string
  description: string
  highlights: string[]
  priceRange: string
  propertyTypes: string[]
  amenities: string[]
  schools?: string[]
  image: string
}

const neighborhoods: Record<string, NeighborhoodData> = {
  'reunion-resort': {
    name: 'Reunion Resort',
    slug: 'reunion-resort',
    description: 'Luxury resort living with world-class amenities in the heart of Central Florida. Reunion Resort offers exclusive residential properties, customizable homes, and investment opportunities in a premier gated community.',
    highlights: [
      'Gated resort community with 24/7 security',
      'Three championship golf courses',
      'Water park and multiple pools',
      'Fine dining and resort amenities',
      'Minutes from Disney World',
      'Luxury homes and customizable properties available'
    ],
    priceRange: '$400,000 - $3,000,000+',
    propertyTypes: ['Luxury Homes', 'Customizable Homes', 'Condos', 'Investment Properties'],
    amenities: [
      'Three Championship Golf Courses',
      'Water Park',
      'Multiple Swimming Pools',
      'Tennis Courts',
      'Fine Dining Restaurants',
      'Spa and Fitness Center',
      'Kids Club',
      'Concierge Services'
    ],
    schools: [
      'Reedy Creek Elementary',
      'Horizon Middle School',
      'Celebration High School'
    ],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  'margaritaville': {
    name: 'Margaritaville',
    slug: 'margaritaville',
    description: 'Relaxed island lifestyle in the heart of Orlando. Margaritaville offers new residential homes, customizable properties, and vacation rental opportunities in a vibrant, resort-style community.',
    highlights: [
      'Resort-style community with island vibes',
      'New residential developments',
      'Vacation rental potential',
      'Close to theme parks',
      'Customizable home options',
      'Strong rental market'
    ],
    priceRange: '$300,000 - $1,500,000+',
    propertyTypes: ['New Residential Homes', 'Customizable Homes', 'Condos', 'Townhomes'],
    amenities: [
      'Resort-Style Pool',
      'Tiki Bars and Restaurants',
      'Entertainment Venues',
      'Fitness Center',
      'Water Activities',
      'Live Music Events',
      'Shopping and Dining'
    ],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  'champions-gate': {
    name: 'Champions Gate',
    slug: 'champions-gate',
    description: 'Golf community with championship courses and luxury living. Champions Gate offers residential properties, land for sale, and customizable homes in a premier golf community setting.',
    highlights: [
      'Championship golf courses',
      'Gated community',
      'Luxury residential properties',
      'Land available for custom builds',
      'Resort-style amenities',
      'Investment property opportunities'
    ],
    priceRange: '$350,000 - $2,500,000+',
    propertyTypes: ['Golf Course Homes', 'Customizable Homes', 'Land for Sale', 'Luxury Estates'],
    amenities: [
      'Two Championship Golf Courses',
      'Golf Clubhouse',
      'Swimming Pools',
      'Tennis Courts',
      'Fitness Center',
      'Dining Facilities',
      'Pro Shop'
    ],
    schools: [
      'Davenport School of the Arts',
      'Ridge Community High School'
    ],
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  'clermont': {
    name: 'Clermont',
    slug: 'clermont',
    description: 'Family-friendly community with beautiful homes, land for sale, and new residential developments. Clermont offers affordable real estate options, customizable homes, and investment opportunities in a growing Central Florida market.',
    highlights: [
      'Family-friendly community',
      'Affordable housing options',
      'Land available for sale',
      'New residential developments',
      'Growing real estate market',
      'Customizable home builders'
    ],
    priceRange: '$200,000 - $800,000+',
    propertyTypes: ['Single Family Homes', 'New Residential', 'Land for Sale', 'Customizable Homes', 'Investment Properties'],
    amenities: [
      'Lake Minneola',
      'Waterfront Properties',
      'Parks and Recreation',
      'Historic Downtown',
      'Shopping Centers',
      'Excellent Schools',
      'Close to Nature Trails'
    ],
    schools: [
      'Clermont Elementary',
      'East Ridge Middle School',
      'East Ridge High School',
      'Lake Minneola High School'
    ],
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  'orlando-downtown': {
    name: 'Orlando Downtown',
    slug: 'orlando-downtown',
    description: 'Urban living in the heart of the city. Orlando Downtown offers residential properties, commercial real estate, and investment opportunities in a vibrant urban setting.',
    highlights: [
      'Urban lifestyle',
      'Commercial real estate opportunities',
      'Residential condos and lofts',
      'Walkable downtown',
      'Entertainment and dining',
      'Investment property potential'
    ],
    priceRange: '$250,000 - $1,200,000+',
    propertyTypes: ['Condos', 'Lofts', 'Commercial Real Estate', 'Mixed-Use Properties'],
    amenities: [
      'Downtown Entertainment',
      'Restaurants and Bars',
      'Cultural Venues',
      'Parks and Recreation',
      'Public Transportation',
      'Shopping Districts',
      'Business District'
    ],
    schools: [
      'Lake Eola Charter School',
      'Howard Middle School',
      'Boone High School'
    ],
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  'titusville': {
    name: 'Titusville',
    slug: 'titusville',
    description: 'Coastal living near Kennedy Space Center. Titusville offers waterfront properties, land for sale, residential homes, and investment opportunities in a unique coastal community.',
    highlights: [
      'Waterfront properties',
      'Coastal living',
      'Near Kennedy Space Center',
      'Land available for sale',
      'Residential and commercial real estate',
      'Growing market'
    ],
    priceRange: '$180,000 - $1,000,000+',
    propertyTypes: ['Waterfront Homes', 'Residential Properties', 'Land for Sale', 'Commercial Real Estate'],
    amenities: [
      'Indian River Waterfront',
      'Space Coast Beaches',
      'Kennedy Space Center',
      'Parks and Nature Preserves',
      'Fishing and Boating',
      'Historic Downtown',
      'Space Coast Regional Airport'
    ],
    schools: [
      'Titusville Elementary',
      'Jackson Middle School',
      'Titusville High School'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  }
}

const NeighborhoodPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const neighborhood = slug ? neighborhoods[slug] : null

  if (!neighborhood) {
    return (
      <div className="neighborhood-page">
        <div className="container">
          <h1>Neighborhood Not Found</h1>
          <p>The neighborhood you're looking for doesn't exist.</p>
          <Link to="/properties">View All Properties</Link>
        </div>
      </div>
    )
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `${neighborhood.name} Real Estate`,
    "description": neighborhood.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": neighborhood.name,
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  }

  return (
    <div className="neighborhood-page">
      <SEO
        title={`${neighborhood.name} Real Estate - Homes for Sale, Land, and Customizable Properties`}
        description={`Find homes for sale, land for sale, new residential properties, and customizable homes in ${neighborhood.name}, Central Florida. ${neighborhood.description}`}
        keywords={`${neighborhood.name} real estate, homes for sale ${neighborhood.name}, land for sale ${neighborhood.name}, new residential ${neighborhood.name}, customizable homes ${neighborhood.name}, properties ${neighborhood.name}, Central Florida real estate`}
        url={`https://serenitylegacy.net/neighborhoods/${neighborhood.slug}`}
        schema={schema}
      />
      
      {/* Hero Section */}
      <section 
        className="neighborhood-hero"
        style={{ backgroundImage: `url(${neighborhood.image})` }}
      >
        <div className="container">
          <div className="neighborhood-hero-content">
            <h1>Real Estate in {neighborhood.name}</h1>
            <p className="neighborhood-subtitle">{neighborhood.description}</p>
            <div className="neighborhood-hero-cta">
              <Link to="/properties" className="cta-button cta-button-large">
                View Properties in {neighborhood.name}
              </Link>
              <Link to="/contact" className="cta-button cta-button-secondary">
                Contact Us About {neighborhood.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="neighborhood-highlights">
        <div className="container">
          <h2>Why Choose {neighborhood.name}?</h2>
          <div className="highlights-grid">
            {neighborhood.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">✓</div>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Info Section */}
      <section className="neighborhood-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Price Range</h3>
              <p className="info-value">{neighborhood.priceRange}</p>
            </div>
            <div className="info-card">
              <h3>Property Types</h3>
              <ul>
                {neighborhood.propertyTypes.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
            {neighborhood.schools && (
              <div className="info-card">
                <h3>Nearby Schools</h3>
                <ul>
                  {neighborhood.schools.map((school, index) => (
                    <li key={index}>{school}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="neighborhood-amenities">
        <div className="container">
          <h2>Community Amenities</h2>
          <div className="amenities-grid">
            {neighborhood.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <span className="amenity-icon">✦</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="neighborhood-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Property in {neighborhood.name}?</h2>
            <p>Contact us today to explore homes for sale, land for sale, new residential properties, and customizable homes in {neighborhood.name}.</p>
            <div className="cta-buttons">
              <Link to="/properties" className="cta-button cta-button-large">
                View All Properties
              </Link>
              <Link to="/contact" className="cta-button cta-button-secondary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NeighborhoodPage

